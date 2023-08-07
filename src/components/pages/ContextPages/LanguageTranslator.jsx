import Card from "../../UI/Card";
import Dropdown from "../../UI/Dropdown";
import TextArea from "../../UI/TextArea";
import { useTheme } from "../../context/ThemeContext";
import { useTranslator } from "../../context/TranslatorContext";
import ContentFooter from "../../layout/ContentFooter";
import ContentHeader from "../../layout/ContentHeader";

function LanguageTranslator({ initialStacks }) {
  const { cardDark, secondaryDark } = useTheme();
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

  return (
    <div className="flex flex-col space-y-2">
      <ContentHeader title="🔠 Language Translator" stacks={initialStacks} />
      <div className="flex flex-col md:flex-row w-full gap-2 justify-between ">
        <Card className="w-full flex flex-col space-y-2 bg-gray-100">
          <Dropdown
            items={items}
            className={`w-full ${cardDark}`}
            selected={fromSelectedLang}
            onSelect={handleFromSelected}
          />
          <TextArea
            value={langQuery}
            dark={cardDark}
            placeholder="Text to Translate"
            onChange={(e) =>
              setLangQuery((langQuery) => (langQuery = e.target.value))
            }
          />
        </Card>
        <Card className="w-full flex flex-col space-y-2 bg-gray-100">
          <Dropdown
            items={items}
            className={`w-full ${cardDark}`}
            selected={toSelectedLang}
            onSelect={handleToSelected}
          />
          <TextArea
            disabled
            value={
              !isLoading && translatedText
                ? translatedText
                : isLoading && langQuery !== ""
                ? "Translating..."
                : ""
            }
            dark={cardDark}
          />
        </Card>
      </div>
      <ContentFooter />
    </div>
  );
}

export default LanguageTranslator;
