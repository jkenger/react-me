import { useEffect, useRef, useState } from "react";
import Card from "../../UI/Card";
import Dropdown from "../../UI/Dropdown";

function LanguageTranslator() {
  const [isLoading, setIsLoading] = useState(false);

  const [langs, setLangs] = useState([]);
  const [codes, setCodes] = useState([]);

  const [langQuery, setLangQuery] = useState("");
  const [translatedText, setTranslatedText] = useState(null);

  const [fromSelectedLang, setFromSelectedLang] = useState("");
  const [toSelectedLang, setToSelectedLang] = useState("");

  function handleFromSelected(selected) {
    setFromSelectedLang((fromSelectedLang) => selected);
  }
  function handletoSelected(selected) {
    setToSelectedLang((toSelectedLang) => selected);
  }

  //   Fetch Translated Language

  useEffect(() => {
    const controller = new AbortController();

    async function translate() {
      const from = "eng";
      const to = "fil";
      const translate = langQuery !== "";
      try {
        if (translate) {
          setIsLoading(true);
          const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${langQuery}!&langpair=${from}|${to}`,
            {
              signal: controller.signal,
            }
          );
          if (!res.ok)
            throw new Error("Something went wrong with translating language");

          const translatedText = await res.json();

          if (translatedText.Response === "False") {
            throw new Error("Translation not found");
          }
          setTranslatedText(translatedText.responseData.translatedText);
          setIsLoading(false);
          console.log(translatedText);
        }
      } catch (e) {
        console.log(e.name);
      }
    }
    translate();

    // Abort fetching from api when rerendering
    return function () {
      controller.abort();
    };
  }, [langQuery]);

  //   Fetch Codes and Languages
  useEffect(
    function () {
      async function fetchLanguages() {
        try {
          const res = await fetch(
            "https://restcountries.com/v3.1/independent?fields=languages"
          );
          const data = await res.json();
          const currLang = [];
          const fullLangs = [];

          //   map codes
          data.map((languages) =>
            Object.entries(languages.languages).map((lang) => {
              fullLangs.push(lang);
            })
          );

          // map languages
          data.map((languages) =>
            Object.values(languages.languages).length > 1
              ? Object.values(languages.languages).map((lang) =>
                  currLang.push(lang)
                )
              : ""
          );

          // filter duplicates
          const filteredLanguages = currLang.filter(function (item, pos) {
            return currLang.indexOf(item) === pos;
          });
          setLangs((langs) => filteredLanguages);
          setCodes((codes) => fullLangs);
          //   setLangs((langs) => []);
        } catch (e) {
          throw new Error("Failted Fetching");
        }
      }
      fetchLanguages();
    },
    [langs.length, codes.length]
  );

  return (
    <div className="flex-flex-col space-y-2">
      <h1 className="text-lg">Language Translate</h1>
      {langQuery}
      <Card className="flex flex-col md:flex-row w-full gap-2 justify-between ">
        <Card className="w-full">
          <Dropdown
            className="w-full"
            langs={langs}
            selected={fromSelectedLang}
            onSelect={handleFromSelected}
          />
          <textarea
            placeholder="Enter Text"
            onChange={(e) =>
              setLangQuery((langQuery) => (langQuery = e.target.value))
            }
            className="w-full text-4xl px-2 py-4 border-0 outline-none"
          ></textarea>
        </Card>
        <Card className="w-full flex flex-col space-y-2 bg-gray-100">
          <Dropdown
            className="w-full"
            langs={langs}
            selected={toSelectedLang}
            onSelect={handletoSelected}
          />
          <textarea
            disabled
            value={!isLoading && translatedText ? translatedText : ""}
            className="w-full text-4xl px-2 py-4 border-0 outline-none bg-gray-100"
          >
            Translate
          </textarea>
        </Card>
      </Card>
    </div>
  );
}

export default LanguageTranslator;
