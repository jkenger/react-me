import { Select, Option } from "@material-tailwind/react";
import { useEffect, useMemo, useState } from "react";
export default function Dropdown({ className }) {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [langs, setLangs] = useState([]);

  useEffect(
    function () {
      async function fetchLanguages() {
        try {
          const res = await fetch(
            "https://restcountries.com/v3.1/independent?fields=languages"
          );
          const data = await res.json();
          const currLang = [];
          data.map((languages) =>
            Object.values(languages.languages).length > 1
              ? Object.values(languages.languages).map((lang) =>
                  currLang.push(lang)
                )
              : ""
          );

          const filteredLanguages = currLang.filter(function (item, pos) {
            return currLang.indexOf(item) === pos;
          });
          setLangs((langs) => filteredLanguages);
        } catch (e) {
          throw new Error("Failted Fetching");
        }
      }
      fetchLanguages();
    },
    [langs.length]
  );

  return (
    <div className={`${className}`}>
      <select
        className="border border-gray-200 rounded-md p-2 w-full"
        value={selectedLanguage}
        onChange={(e) => {
          setSelectedLanguage(e.target.value);
        }}
        label="Select Version"
      >
        {langs.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
