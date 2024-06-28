export default function PasswordLength({ passwordLength, setPasswordLength }) {
  function handlePasswordLengthChange(event) {
    setPasswordLength(parseInt(event.target.value, 10));
  }

  return (
    <div className="mb-4 border-black border-2 staatliches-regular">
      <label className="flex items-center justify-between font-medium">
        <div className='pl-2 staatliches-regular'>Password length</div>
        <div className="text-2xl pr-2 staatliches-regular">{passwordLength}</div>
      </label>
      <input
        type="range"
        id="passwordLength"
        min="4"
        max="20"
        value={passwordLength}
        className="w-full appearance-none h-1 bg-black custom-range"
        onChange={handlePasswordLengthChange}
      />
    </div>
  );
}
