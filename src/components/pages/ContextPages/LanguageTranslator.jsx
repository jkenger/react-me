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
  const [pair, setPair] = useState(["eng", "eng"]);

  function handleFromSelected(e) {
    setFromSelectedLang((fromSelectedLang) => {
      return e.target.value;
    });
    codes.find(
      (value) =>
        value[1] === e.target.value &&
        setPair((pair) => {
          return pair.length <= 2 ? [value[0], pair[1]] : [value[0], pair[1]];
        })
    );
  }
  function handletoSelected(e) {
    setToSelectedLang((toSelectedLang) => e.target.value);
    codes.find(
      (value) =>
        value[1] === e.target.value &&
        setPair((pair) => {
          return pair.length <= 2 ? [pair[0], value[0]] : [value[0], pair[1]];
        })
    );
  }

  //   Fetch Translated Language

  useEffect(() => {
    console.log(pair[0], pair[1]);
    const controller = new AbortController();

    async function translate() {
      const translate = langQuery !== "";
      const from = pair[0];
      const to = pair[1];
      try {
        if (translate) {
          setIsLoading(true);
          const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${langQuery}&langpair=${from}|${to}`,
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
  }, [langQuery, pair]);

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
      <p className="text-xs text-red-700">
        Note: the translation might be inaccurate and non-functional to some
        language/words as it varies from the api used for this development.
      </p>
      <p className="text-xs"> Made with 💗 by Ken Gervacio</p>
    </div>
  );
}

export default LanguageTranslator;
