import React,{useState} from "react"

function App() {
0,1
  const [result,setResult]=useState("0");
  const handleClick= (e) =>{
    setResult((prev) =>prev.concat(e.target.id))
  }
const clearAll =()=>setResult("");
const delete1 = ()=>setResult(result.slice(0,-1));
const calculate = ()=>{
  try{
    setResult(eval(result).toString())
  }catch(error){
    setResult("Error")
  }
}
  
  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <h1 className="text-dxl text-pink-800 font-bold">Calculatrice</h1>
      <div className="bg-rose-00 p-4 max-w-96 rounded-md border-4 border-pink-100
      shadow=[0_1px_6px_5px F000000]">
        <input className="bg-slate-900/80 rounded-md p-4 w-full text-2xl font-semibold text-white text-right tracking-wider border-2 border-pink-200 
        shadow-inner  shadow-current " type="text" value={result} disabled/>
        <p className="bg-slate-300 inline-block rounded-full px-3 py-3 py-1 my-2
        text-red-500 text-sw tracking-wider border border-e-slate-400">Test Stage NIKIEMA</p>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={clearAll} type="Button" className="operator">AC</button>
          <button onClick={delete1} type="Button" className="operator">DEL</button>
          <button onClick={handleClick} type="Button" className="operator" id=".">.</button>
          <button onClick={handleClick}  type="Button" className="operator" id="/">/</button>
          <button onClick={handleClick}  type="Button" className="number" id="7">7</button>
          <button onClick={handleClick}  type="Button" className="number" id="8">8</button>
          <button onClick={handleClick}  type="Button" className="number" id="9">9</button>
          <button onClick={handleClick}  type="Button" className="operator" id="*">*</button>
          <button onClick={handleClick}  type="Button" className="number" id="4">4</button>
          <button onClick={handleClick}  type="Button" className="number" id="5">5</button>
          <button onClick={handleClick}  type="Button" className="number" id="6">6</button>
          <button onClick={handleClick}  type="Button" className="operator" id="-">-</button>
          <button onClick={handleClick}  type="Button" className="number" id="1">1</button>
          <button onClick={handleClick}  type="Button" className="number" id="2">2</button>
          <button onClick={handleClick}  type="Button" className="number" id="3">3</button>
          <button onClick={handleClick}  type="Button" className="operator" id="+">+</button>
          <button onClick={handleClick}  type="Button" className="number" id="00">00</button>
          <button onClick={handleClick}  type="Button" className="number" id="0">0</button>
          <button onClick={calculate} type="Button" className="operator col-span-2" id="=">=</button>
        </div>
      </div>
    </div>
  )
}

export default App
