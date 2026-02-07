import { useState,useCallback, useEffect } from "react"
export default function App() {
  const [length, setLength] = useState(12)
  const [int_present, setInt_present] = useState(false)
  const [char_present, setChar_present] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(int_present){
      chars += "0123456789"
    }
    if(char_present){
      chars += "!@#$%^&*()_+"
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(password)
  }, [length,int_present,char_present])

  useEffect(() => {
    passwordGenerator()
  }, [length,int_present,char_present])

  const copyPassword = () => {
  if (!password) return
  navigator.clipboard.writeText(password)
}


    return (
    <>

  <div className="bg-white text-black text-center px-8 py-4 rounded-lg space-y-4 w-screen">

  <div>
    Here is your password:
    <div className="bg-blue-950 text-white mt-2 py-2 rounded">
      {password}
    </div>
  </div>

  {/* Length Slider */}
  <div className="flex flex-col items-start">
    <label className="font-semibold">
      Length: {length}
    </label>
    <input
      type="range"
      min="4"
      max="32"
      value={length}
      onChange={(e) => setLength(Number(e.target.value))}
      className="w-full"
    />
  </div>

  {/* Checkboxes */}
  <div className="flex gap-4 justify-center">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={int_present}
        onChange={() => setInt_present(prev => !prev)}
      />
      Numbers
    </label>

    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={char_present}
        onChange={() => setChar_present(prev => !prev)}
      />
      Special Chars
    </label>
  </div>

  <button
  onClick={copyPassword}
  className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
>
  Copy
</button>

</div>
 

    </>
  )
}
