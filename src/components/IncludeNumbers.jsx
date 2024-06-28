export default function IncludeNumbers({ includeNumbers, setIncludeNumbers }) {
  function handleIncludeNumbersChange() {
    setIncludeNumbers(!includeNumbers);
  }

  return (
    <div className="mb-2 border-black border-2 flex flex-grow">
      <input
        type="checkbox"
        id="includeNumbers"
        checked={includeNumbers}
        className="mr-2 ml-2 custom-checkbox"
        onChange={handleIncludeNumbersChange}
      />
      <label htmlFor="includeNumbers" className='staatliches-regular'>Include Numbers</label>
    </div>
  );
}
