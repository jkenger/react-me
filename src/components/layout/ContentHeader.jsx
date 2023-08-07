import Badge from "../UI/Badge";

function ContentHeader({ title, stacks = [] }) {
  const techStacks = stacks.length
    ? stacks.map((stack) => (
        <>
          <Badge stack={stack} />
        </>
      ))
    : "";

  return (
    <div className="flex space-x-2">
      <h1 className="text-lg">{title}</h1>
      {techStacks}
    </div>
  );
}

export default ContentHeader;
