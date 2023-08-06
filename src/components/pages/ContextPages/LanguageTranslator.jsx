import Card from "../../UI/Card";
import Dropdown from "../../UI/Dropdown";
import { useTranslator } from "../../context/TranslatorContext";
import ContentFooter from "../../layout/ContentFooter";
import ContentHeader from "../../layout/ContentHeader";

function LanguageTranslator() {
  const {
    langs: items,
    isLoading,
    translatedText,
    setLangQuery,
    fromSelectedLang,
    handleFromSelected,
    toSelectedLang,
    handleToSelected,
    langQuery,
  } = useTranslator();
  const initialStacks = ["React JS", "Context API", "Tailwind CSS"];
  return (
    <div className="flex flex-col space-y-2">
      <ContentHeader title="Language Translator" stacks={initialStacks} />
      <Card className="flex flex-col md:flex-row w-full gap-2 justify-between ">
        <Card className="w-full">
          <Dropdown
            items={items}
            className="w-full"
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
            items={items}
            className="w-full"
            selected={toSelectedLang}
            onSelect={handleToSelected}
          />
          <textarea
            disabled
            value={
              !isLoading && translatedText
                ? translatedText
                : isLoading && langQuery !== ""
                ? "Translating..."
                : ""
            }
            className="w-full text-4xl px-2 py-4 border-0 outline-none bg-gray-100"
          >
            Translate
          </textarea>
        </Card>
      </Card>
      <ContentFooter />
    </div>
  );
}

export default LanguageTranslator;
