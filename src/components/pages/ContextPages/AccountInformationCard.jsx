import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { FaPaste, FaPen, FaTrash } from "react-icons/fa6";

function AccountInformationCard({ infos }) {
  return (
    <table className="w-full border border-gray-200  border-collapse  text-sm">
      <tr className="flex justify-start w-full  uppercase rounded-t-md  font-normal ">
        <th className=" w-1/2 py-4 text-start "></th>
        <th className=" w-full py-4 text-start">Name</th>
        <th className=" w-full py-4 text-start">Age</th>
        <th className=" w-full py-4 text-start">Education</th>
        <th className=" w-full py-4 text-start">Course</th>
        <th className=" w-full py-4 text-start"></th>
      </tr>
      {infos.map((info) => (
        <tr className="flex w-full border-t border-g bg-gray-100  font-normal items-center">
          <>
            <td className="w-1/2 h-full flex justify-center items-center py-2">
              <img
                src={info.avatar}
                alt={info.name}
                className="rounded-full w-auto h-auto"
              />
            </td>
            <td className="w-full ">{info.name}</td>
            <td className="w-full ">{info.age}</td>
            <td className="w-full ">{info.education}</td>
            <td className="w-full ">{info.course}</td>
            <td className="w-full flex space-x-2 text-xs text-black">
              <button className="" disabled>
                <FaPaste />
              </button>
              <button>
                <FaPen />
              </button>
              <button>
                <FaTrash />
              </button>
            </td>
          </>
        </tr>
      ))}
    </table>
  );
}

export default AccountInformationCard;
