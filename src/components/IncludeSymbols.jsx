export default function IncludeSymbols({ includeSymbols, setIncludeSymbols }) {
  function handleIncludeSymbolsChange() {
    setIncludeSymbols(!includeSymbols);
  }

  return (
    <div className="mb-2 border-black border-2 flex flex-grow">
      <input
        type="checkbox"
        id="includeSymbols"
        checked={includeSymbols}
        className="mr-2 ml-2 custom-checkbox"
        onChange={handleIncludeSymbolsChange}
      />
      <label htmlFor="includeSymbols" className='staatliches-regular'>Include Symbols</label>
    </div>
  );
}
