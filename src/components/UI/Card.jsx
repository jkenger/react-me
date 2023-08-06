import { Navigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Card({ className = "", children, onClick = null }) {
  const { cardDark } = useTheme();
  return (
    <div
      onClick={onClick}
      className={`${cardDark} ${className} card group relative rounded-md 
        border bg-white min-w-3xl py-2 px-4 md:py-4 md:px-6`}
    >
      {children}
    </div>
  );
}

export default Card;
