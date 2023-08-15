import Input from "../../UI/Input";
import { useTheme } from "../../context/ThemeContext";

function AccountInformationForm() {
  return (
    <form className={`text-xs flex flex-col space-y-6`}>
      <div className="flex justify-between items-start space-y-2 flex-col md:flex-row md:space-x-16 md:space-y-0">
        <span>Name</span>
        <Input
          type="text"
          id="Name"
          className="border-gray-300 outline-none focus:border-gray-400 w-96 bg-gray-100"
        ></Input>
      </div>
      <div className="flex justify-between items-start space-y-2 flex-col md:flex-row md:space-x-16 md:space-y-0">
        <span>Age</span>
        <Input
          type="text"
          id="age"
          className="border-gray-300 outline-none focus:border-gray-400 w-96 bg-gray-100"
        ></Input>
      </div>
      <div className="flex justify-between items-start space-y-2 flex-col md:flex-row md:space-x-16 md:space-y-0">
        <span>Education</span>
        <Input
          type="text"
          id="education"
          className="border-gray-300 outline-none focus:border-gray-400 w-96 bg-gray-100"
        ></Input>
      </div>
      <div className="flex justify-between items-start space-y-2 flex-col md:flex-row md:space-x-16 md:space-y-0">
        <span>Course</span>
        <Input
          type="text"
          id="course"
          className="border-gray-300 outline-none focus:border-gray-400 w-96 bg-gray-100"
        ></Input>
      </div>
      <div className="flex flex-col justify-between items-start space-y-2  md:flex-row md:space-x-16 md:space-y-0">
        <span>Image</span>
        <Input
          type="file"
          id="course"
          className="border-gray-300 outline-none focus:border-gray-400 w-96 bg-gray-100"
        ></Input>
      </div>
    </form>
  );
}

export default AccountInformationForm;
