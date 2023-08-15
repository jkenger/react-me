import { useTheme } from "../context/ThemeContext";

function Card({ className = "", children, onClick = null }) {
  const { secondaryDark } = useTheme();
  return (
    <div
      onClick={onClick}
      className={`${secondaryDark} ${className} bg-gray-50 card group rounded-md 
        border min-w-3xl py-2 px-4 md:py-4 md:px-6`}
    >
      {children}
    </div>
  );
}

export default Card;
