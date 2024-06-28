import React, { useState } from 'react';
import IncludeLowercase from './IncludeLowercase';
import IncludeNumbers from './IncludeNumbers';
import IncludeSymbols from './IncludeSymbols';
import IncludeUppercase from './IncludeUppercase';
import PasswordLength from './PasswordLength';
import { generatePassword } from '../utils/generatePassword';
import { AiOutlineCopy } from 'react-icons/ai';
import { GrStatusInfo } from 'react-icons/gr';
import { github } from '../assets';

const Main = () => {
  const [password, setPassword] = useState(null);
  const [passwordLength, setPasswordLength] = useState(4);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copied, setCopied] = useState(false);

  /* Generate */
  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length: passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(newPassword);
    setCopied(false);
  }

  /* Copy */
  function handleCopyClick() {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center pb-20">
      {/* Password Sec*/}
      {password && (
        <div className="border-black border-2 px-4 py-2 break-all flex justify-between items-center w-[20rem] mb-4 bg-white">
          <div className="text-xl font-sans">{password}</div>
          <button className="text-xl flex items-center staatliches-regular" onClick={handleCopyClick}>
            {copied ? (
              <span className="text-green-600">Copied!</span>
            ) : (
              <AiOutlineCopy className='text-green-600 hover:text-green-300'/>
            )}
          </button>
        </div>
      )}

      {/* Elements */}
      <div className="w-[20rem] border-black border-2 p-4 custom-border bg-white">
        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <IncludeUppercase
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
        />
        <IncludeLowercase
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
        />
        <IncludeNumbers
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
        />
        <IncludeSymbols
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        {/* Generate Button */}
        <button onClick={handleGeneratePassword} className="px-4 py-2 w-full uppercase custom-button staatliches-regular">
          Generate
        </button>
      </div>

      {/* Info */}
      <div className='flex justify-center items-center bottom-0 mt-4 w-full'>

        <div className="tooltip staatliches-regular">
      
          <GrStatusInfo className='w-[30px] h-[30px] mr-2 cursor-pointer hover:text-green-300'/>

          <span className="tooltiptext bg-white">
            This Password Generator tool helps you create strong, secure passwords to protect your online accounts. Remember to store your passwords in a safe place and update them regularly for enhanced security.
          </span>

        </div>

        <a href="#" target='_blank' className='w-[30px] h-[30px]'>
          <img src={github} alt="GitHub"/>
        </a>
        
      </div>
    </div>
  );
};

export default Main;
