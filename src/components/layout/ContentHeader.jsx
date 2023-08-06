function ContentHeader({ title, stacks = [] }) {
  const techStacks = stacks.length
    ? stacks.map((stack) => (
        <>
          <span className="flex justify-center items-center bg-gray-100 text-xs py-1 px-2 rounded-md">
            {stack}
          </span>
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
