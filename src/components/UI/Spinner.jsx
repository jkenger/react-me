import { Spinner as MTSpinner } from "@material-tailwind/react";

export function Spinner() {
  return (
    <div className="w-full flex justify-center items-center h-32">
      <MTSpinner color="green" />
    </div>
  );
}
