import { useTheme } from "../context/ThemeContext";

function Input({
  type = "",
  className = "",
  onChange = null,
  disabled = false,
}) {
  const { cardDark } = useTheme();
  return (
    <input
      type={type}
      disabled={disabled}
      className={`${cardDark} focus:shadow-sm transition-all duration-100 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 ${className}`}
      onChange={onChange}
    />
  );
}

export default Input;
