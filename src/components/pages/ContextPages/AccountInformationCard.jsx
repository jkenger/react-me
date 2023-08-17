import Button from "../../UI/Button";
import Card from "../../UI/Card";
import { FaPaste, FaPen, FaTrash } from "react-icons/fa6";
import Table from "../../UI/Table";
import TableRow from "../../UI/TableRow";
import { useTheme } from "../../context/ThemeContext";
import AccountInformationAddModal from "./AccountInformationAddModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "./../../services/supabase";
import { Spinner } from "../../UI/Spinner";
import AccountInformationEditModal from "./AccountInformationEditModal";
import AccountInformationDeleteModal from "./AccountInformationDeleteModal";
import { toast } from "react-hot-toast";
import {
  deleteAccount,
  duplicateAccount,
  getAccounts,
} from "../../services/accountApi";

function AccountInformationCard() {
  const queryClient = useQueryClient();
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

  const { mutate: mutateDelete, isLoading: isDeleting } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      toast.success("Account successfully removed.");
      queryClient.invalidateQueries({
        queryKey: ["accounts"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { mutate: mutateDuplicate, isLoading: isDuplicating } = useMutation({
    mutationFn: duplicateAccount,
    onSuccess: () => {
      toast.success("Account successfully duplicated.");
      queryClient.invalidateQueries({
        queryKey: ["accounts"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  // if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col w-full items-end space-y-4">
      <AccountInformationAddModal />
      <Table>
        <thead>
          <TableRow
            styles={`uppercase bg-gray-100 border-b border-gray-100   ${secondaryDark}`}
          >
            <th className=" w-1/2 py-4 text-start "></th>
            <th className=" w-full py-4 text-start">Name</th>
            <th className=" w-full py-4 text-start">Age</th>
            <th className=" w-full py-4 text-start">Education</th>
            <th className=" w-full py-4 text-start">Course</th>
            <th className=" w-full py-4 text-start"></th>
          </TableRow>
        </thead>

        <tbody>
          {isLoading ? (
            <TableRow>
              <td className="w-full flex justify-center items-center h-32">
                <Spinner />
              </td>
            </TableRow>
          ) : (
            accounts.Accounts.map((account) => (
              <TableRow
                key={account.id}
                styles={`items-center border-b border-gray-100 hover:bg-gray-100 hover:dark:bg-gray-800 ${cardDark}`}
              >
                <td className="w-1/2 h-full flex justify-center items-center py-2">
                  <img
                    src={account.avatar}
                    alt={account.name}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                </td>
                <td className="w-full ">{account.name}</td>
                <td className="w-full ">{account.age}</td>
                <td className="w-full ">{account.education}</td>
                <td className="w-full ">{account.course}</td>
                <td className="w-full flex space-x-2 text-xs text-black">
                  <button
                    onClick={() => mutateDuplicate(account)}
                    disabled={isDuplicating}
                  >
                    <FaPaste />
                  </button>
                  <AccountInformationEditModal account={account}>
                    <button>
                      <FaPen />
                    </button>
                  </AccountInformationEditModal>
                  <button
                    onClick={() => mutateDelete(account.id)}
                    disabled={isDeleting}
                  >
                    <FaTrash />
                  </button>
                </td>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default AccountInformationCard;
