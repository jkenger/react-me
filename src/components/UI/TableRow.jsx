function TableRow({ children, styles = "" }) {
  return (
    <tr className={"flex justify-start w-full font-normal " + styles}>
      {children}
    </tr>
  );
}

export default TableRow;
