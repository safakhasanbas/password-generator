const GeneratePasswordOptions = {
    length: 12,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true
  };
  
  const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  const SYMBOLS = "!@#$%^&*()_+-={}[]|;:<>,.?/~`";
  
  function generatePassword(options) {
    const { length, includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;
  
    let chars = "";
    if (includeUppercase) chars += UPPERCASE_LETTERS;
    if (includeLowercase) chars += LOWERCASE_LETTERS;
    if (includeNumbers) chars += NUMBERS;
    if (includeSymbols) chars += SYMBOLS;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  }
  
  export { generatePassword };
  