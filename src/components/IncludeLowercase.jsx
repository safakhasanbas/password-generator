export default function IncludeLowercase({ includeLowercase, setIncludeLowercase }) {
  function handleIncludeLowercaseChange() {
    setIncludeLowercase(!includeLowercase);
  }

  return (
    <div className="mb-2 border-black border-2 flex flex-grow">
      <input
        type="checkbox"
        id="includeLowercase"
        checked={includeLowercase}
        className="mr-2 ml-2 custom-checkbox"
        onChange={handleIncludeLowercaseChange}
      />
      <label htmlFor="includeLowercase" className='staatliches-regular'>Include Lowercase Letters</label>
    </div>
  );
}
