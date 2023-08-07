export default function Dropdown({ className, items, selected, onSelect }) {
  return (
    <select
      className={`${className} border border-gray-200 rounded-md p-2 w-full bg-gray-50`}
      value={selected}
      onChange={onSelect}
      label="Select Version"
    >
      {items.map((lang) => (
        <option key={lang} value={lang} className="">
          {lang}
        </option>
      ))}
    </select>
  );
}
