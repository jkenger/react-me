function Button({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex items-center justify-center rounded-lg space-x-1 text-xs px-3 py-2 shadow-sm border" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}

export default Button;
