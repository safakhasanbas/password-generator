export default function IncludeUppercase({ includeUppercase, setIncludeUppercase }) {
  function handleIncludeUppercaseChange(event) {
    setIncludeUppercase(!includeUppercase);
  }

  return (
    <div className="mb-2 border-black border-2 flex flex-grow">
      <input
        type="checkbox"
        id="includeUppercase"
        checked={includeUppercase}
        className="mr-2 ml-2 custom-checkbox"
        onChange={handleIncludeUppercaseChange}
      />
      <label htmlFor="includeUppercase" className='staatliches-regular'>Include Uppercase Letters</label>
    </div>
  );
}
