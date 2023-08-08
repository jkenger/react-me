import { useTheme } from "../context/ThemeContext";

function Input({ type = "", className = "", onChange = null, value = "" }) {
  return (
    <input
      type={type}
      className={`${className}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
