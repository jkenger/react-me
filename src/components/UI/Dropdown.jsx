export default function Dropdown({ className, items, selected, onSelect }) {
  return (
    <select
      className={`${className}`}
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
