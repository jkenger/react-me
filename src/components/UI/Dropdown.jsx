export default function Dropdown({ className, items, selected, onSelect }) {
  return (
    <div className={`${className}`}>
      <select
        className="border border-gray-200 rounded-md p-2 w-full"
        value={selected}
        onChange={onSelect}
        label="Select Version"
      >
        {items.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
