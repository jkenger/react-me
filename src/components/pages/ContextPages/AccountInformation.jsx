import AccountInformationCard from "./AccountInformationCard";

function AccountInformation() {
  const FAKE_INFOS = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/50?u=zz",
      name: "Ken Gervacio",
      age: "21",
      education: "College Graduate",
      course: "BS in Computer Science",
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/50?u=203",
      name: "Ningning Ruo",
      age: "22",
      education: "College Graduate",
      course: "BS in Computer Science",
    },
  ];
  return (
    <div className="flex  min-w-fit">
      <AccountInformationCard infos={FAKE_INFOS} />
    </div>
  );
}

export default AccountInformation;
