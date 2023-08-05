import Card from "../../UI/Card";
import Dropdown from "../../UI/Dropdown";

function LanguageTranslator() {
  return (
    <Card className="flex flex-col md:flex-row w-full gap-2">
      <Card className="w-full">
        <Dropdown className="w-full" />
      </Card>
      <Card className="w-full">Right</Card>
    </Card>
  );
}

export default LanguageTranslator;
