import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { FaPaste, FaPen, FaTrash } from "react-icons/fa6";
import Table from "../../UI/Table";
import TableRow from "../../UI/TableRow";
import { useTheme } from "../../context/ThemeContext";
import AccountInformationAddModal from "./AccountInformationAddModal";
import { useQuery } from "@tanstack/react-query";
import supabase from "./../../services/supabase";
import { Spinner } from "../../UI/Spinner";
import AccountInformationEditModal from "./AccountInformationEditModal";

async function getAccounts() {
  let { data: Accounts, error } = await supabase.from("Accounts").select("*");
  return { Accounts, error };
}

function AccountInformationCard() {
  const { secondaryDark, cardDark } = useTheme();
  const {
    data: accounts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["accounts"],
    queryFn: getAccounts,
    onSuccess: () => {
      console.log("fetch successfully");
    },
    onError: () => {
      console.log("fetch error");
    },
  });

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col w-full items-end space-y-4">
      <AccountInformationAddModal />
      <Table>
        <TableRow styles={`uppercase ${secondaryDark}`}>
          <th className=" w-1/2 py-4 text-start "></th>
          <th className=" w-full py-4 text-start">Name</th>
          <th className=" w-full py-4 text-start">Age</th>
          <th className=" w-full py-4 text-start">Education</th>
          <th className=" w-full py-4 text-start">Course</th>
          <th className=" w-full py-4 text-start"></th>
        </TableRow>

        {accounts.Accounts.map((account) => (
          <TableRow styles={`items-center bg-gray-100 ${cardDark}`}>
            <td className="w-1/2 h-full flex justify-center items-center py-2">
              <img
                src={account.avatar}
                alt={account.name}
                className="rounded-full w-auto h-auto"
              />
            </td>
            <td className="w-full ">{account.name}</td>
            <td className="w-full ">{account.age}</td>
            <td className="w-full ">{account.education}</td>
            <td className="w-full ">{account.course}</td>
            <td className="w-full flex space-x-2 text-xs text-black">
              <button className="" disabled>
                <FaPaste />
              </button>
              <AccountInformationEditModal>
                <button>
                  <FaPen />
                </button>
              </AccountInformationEditModal>

              <button>
                <FaTrash />
              </button>
            </td>
          </TableRow>
        ))}
      </Table>
    </div>
  );
}

export default AccountInformationCard;
