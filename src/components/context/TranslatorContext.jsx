import { createContext, useContext, useEffect, useState } from "react";

function TranslatorProvider({ children }) {
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
  function handleToSelected(e) {
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
  }, [langQuery, pair, toSelectedLang, fromSelectedLang]);

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
    <TranslatorContext.Provider
      value={{
        langs,
        isLoading,
        translatedText,
        fromSelectedLang,
        toSelectedLang,
        handleFromSelected,
        handleToSelected,
        setLangQuery,
        langQuery,
      }}
    >
      {children}
    </TranslatorContext.Provider>
  );
}

const TranslatorContext = createContext();

function useTranslator() {
  const context = useContext(TranslatorContext);
  if (context === undefined)
    throw new Error("TranslatorContext was used outside the Provider");

  return context;
}

export { useTranslator, TranslatorProvider };
