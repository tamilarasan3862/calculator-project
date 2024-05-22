import React,{useState} from 'react'
import './App.css'
function App() {
    const [Result,setResult] = useState("");
    let handleClick = (event)=>{
       setResult(Result.concat(event.target.name));
    }
    let handleAc = (event)=>{
      setResult(Result.slice(0,-1));
    }
    let handleCalculation = ()=>{
    try{
       return setResult(eval(Result).toString());
    }catch(err){
        setResult("Error");
    }
    }
    let handleClear = ()=>{
      setResult("");
    }
return (
  <>
  <div className="container">
      <form>
        <input type="text" value={Result}/>
      </form>
      <div className="keypad">
        <button className="highlite" id="clear" onClick={handleClear} >clear</button>
        <button className="highlite"  onClick={handleAc}>AC</button>
        <button name="/" onClick={handleClick} className="highlite">&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick} className="highlite">&times;</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick} className="highlite">&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick} className="highlite">+</button>
        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button name="=" onClick={handleCalculation} id="eql"  className="highlite">=</button>
      </div>
  </div>
  </>
);
}

export default App;
