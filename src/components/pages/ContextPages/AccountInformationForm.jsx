import Input from "../../UI/Input";
import { useTheme } from "../../context/ThemeContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase, { supabaseUrl } from "./../../services/supabase";
import { useForm } from "react-hook-form";
import { cloneElement } from "react";
import { toast } from "react-hot-toast";
import {
  createAccount,
  getAccounts,
  updateAccount,
} from "../../services/accountApi";

function AccountInformationForm({ children, handleOnOpen, account }) {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;
  console.log(errors);

  let editSession = "";
  // If account is not null, session is editing mode.
  if (account) editSession = "edit";

  const queryClient = useQueryClient();

  // Create mutation
  const { mutate: mutateCreate, isLoading: isCreating } = useMutation({
    mutationFn: createAccount,
    onSuccess: () => {
      toast.success("Account successfully created.");
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      handleOnOpen?.();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  //Update mutation
  const { mutate: mutateUpdate, isLoading: isUpdating } = useMutation({
    mutationFn: (data) => updateAccount(data, account.id),
    onSuccess: () => {
      toast.success("Account successfully updated.");
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      handleOnOpen?.();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    if (editSession) {
      console.log("updating..");
      mutateUpdate({ ...data, avatar: account.avatar });
    } else {
      mutateCreate(data);
    }
  }

  return (
    <form
      className={`text-xs flex flex-col `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" flex-col space-y-6 px-4 py-6 ">
        <div className="flex justify-between items-start space-y-2 flex-col md:flex-row md:space-x-16 md:space-y-0">
          <div className="min-w-[50px]">
            <span>Name</span>
          </div>
          <div className="w-full space-y-2">
            <Input
              type="text"
              id="name"
              defaultValue={account?.name}
              {...register("name", {
                required: "This field is required.",
              })}
              className="disabled:bg-gray-200"
              disabled={isCreating}
            ></Input>
            <div className="mt-2">
              <span className="text-red-800">{errors.name?.message}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start space-y-2 flex-col md:flex-row md:space-x-16 md:space-y-0">
          <div className="min-w-[50px]">
            <span>Age</span>
          </div>
          <div className="w-full space-y-2">
            <Input
              type="text"
              id="age"
              defaultValue={account?.age}
              className="disabled:bg-gray-200"
              {...register("age", {
                required: "This field is required.",
              })}
              disabled={isCreating}
            ></Input>
            <div className="mt-2">
              <span className="text-red-800">{errors.age?.message}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start space-y-2 flex-col md:flex-row md:space-x-16 md:space-y-0">
          <div className="min-w-[50px]">
            <span>Education</span>
          </div>
          <div className="w-full space-y-2">
            <Input
              type="text"
              id="education"
              defaultValue={account?.education}
              className="disabled:bg-gray-200"
              {...register("education", {
                required: "This field is required.",
              })}
              disabled={isCreating}
            ></Input>
            <div className="mt-2">
              <span className="text-red-800">{errors.education?.message}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start space-y-2 flex-col md:flex-row md:space-x-16 md:space-y-0">
          <div className="min-w-[50px]">
            <span>Course</span>
          </div>
          <div className="w-full space-y-2">
            <Input
              type="text"
              id="course"
              defaultValue={account?.course}
              className="disabled:bg-gray-200"
              {...register("course", {
                required: "This field is required.",
              })}
              disabled={isCreating}
            ></Input>
            <div className="mt-2">
              <span className="text-red-800">{errors.course?.message}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-start space-y-2  md:flex-row md:space-x-16 md:space-y-0">
          <div className="min-w-[50px]">
            <span>Image</span>
          </div>
          <div className="w-full space-y-2">
            <Input
              type="file"
              id="avatar"
              className="disabled:bg-gray-200"
              {...register("avatar")}
              disabled={isCreating}
            ></Input>
          </div>
        </div>
      </div>

      {cloneElement(children, { disabled: isCreating })}
    </form>
  );
}

export default AccountInformationForm;
