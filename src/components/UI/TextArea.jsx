import { useTheme } from "../context/ThemeContext";

function TextArea({
  value = "",
  dark = "",
  onChange = null,
  disabled = false,
  placeholder = "",
}) {
  return (
    <textarea
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className={`w-full text-4xl px-2 py-4 border outline-none bg-gray-100 ${dark}`}
    >
      Translate
    </textarea>
  );
}

export default TextArea;
