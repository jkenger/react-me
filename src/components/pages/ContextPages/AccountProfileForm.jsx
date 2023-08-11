import { useState } from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";

function AccountProfileForm() {
  const [accountName, setAccountName] = useState("");
  const { cardDark } = useTheme();
  const { handleSetName } = useUser();

  function handleName(e) {
    setAccountName((accountName) => e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!accountName) return;

    handleSetName(accountName);
    setAccountName("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <p className="text-xs">Username:</p>
        <Input
          type="text"
          value={accountName}
          className={cardDark}
          onChange={handleName}
        ></Input>
        <div className="cta w-full flex justify-end space-x-2">
          <Button
            className={
              "border-green-500 bg-green-700 text-white hover:bg-green-500"
            }
          >
            Apply
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AccountProfileForm;
