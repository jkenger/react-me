import { useTheme } from "../context/ThemeContext";

function Card({ className = "", children }) {
  const { cardDark } = useTheme();
  return (
    <div
      className={`${cardDark} ${className} card group relative rounded-md 
        border bg-white min-w-3xl py-2 px-4 md:py-4 md:px-6`}
    >
      {children}
    </div>
  );
}

export default Card;
