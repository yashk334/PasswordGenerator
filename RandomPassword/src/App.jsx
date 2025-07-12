import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     const [length,setLength] = useState(12);
     const [isUpperCase,setIsUpperCase] = useState(true);
     const [isNumber,setIsNumber] = useState(true);
     const [isSymbol,setIsSymbol] = useState(true);
     const [password,setPassword] = useState("");

     const generatePassword = () =>{
          let charSet = "abcdefghijklmnopqrstuvwxyz";
          if(isUpperCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          if(isNumber) charSet += "1234567890";
          if(isSymbol) charSet += "!@#$%^&*()";

          let generated="";

          for(let i=0;i<length;i++){
               const randomIndex = Math.floor(Math.random()*charSet.length);
               generated += charSet[randomIndex];
          }
          setPassword(generated);
        
     }

     const copyToClipboard = () =>{
          navigator.clipboard.writeText(password);
          alert("password copied");
     }

  return (
    <>
      <h1>Random Password Generator</h1>
      <div>
           <label>
              Length:{length}
              <input type="range" min="6" max="12" value={length} onChange={(e)=>setLength(Number(e.target.value))}/>
           </label>
      </div>
      <div>
          <label>
              <input type="checkbox" checked={isUpperCase} onChange={()=>setIsUpperCase(!isUpperCase)} />
                  Include UpperCase
          </label>
      </div>
      <div>
          <label>
              <input type="checkbox" checked={isNumber} onChange={()=>setIsNumber(!isNumber)} />
              Include Number
          </label>
      </div>
      <div>
         <label>
            <input type="checkbox" checked={isSymbol} onChange={()=>setIsSymbol(!isSymbol)}/>
            Include Symbol
         </label>
      </div>
      <div>
         <button onClick={generatePassword}>
            Generate Password
         </button>

        {password && (
          <>
           <h3>{password}</h3>
           <button onClick={copyToClipboard}>Copy</button>
          </>
          
        )}
      </div>


    </>
  )
}

export default App
