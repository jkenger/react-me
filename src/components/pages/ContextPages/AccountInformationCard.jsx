import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { FaPaste, FaPen, FaTrash } from "react-icons/fa6";
import Table from "../../UI/Table";
import TableRow from "../../UI/TableRow";
import { useTheme } from "../../context/ThemeContext";

function AccountInformationCard({ infos }) {
  const { secondaryDark, cardDark } = useTheme();
  return (
    <Table>
      <TableRow styles={`uppercase ${secondaryDark}`}>
        <th className=" w-1/2 py-4 text-start "></th>
        <th className=" w-full py-4 text-start">Name</th>
        <th className=" w-full py-4 text-start">Age</th>
        <th className=" w-full py-4 text-start">Education</th>
        <th className=" w-full py-4 text-start">Course</th>
        <th className=" w-full py-4 text-start"></th>
      </TableRow>
      {infos.map((info) => (
        <TableRow styles={`items-center bg-gray-100 ${cardDark}`}>
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
        </TableRow>
      ))}
    </Table>
  );
}

export default AccountInformationCard;
