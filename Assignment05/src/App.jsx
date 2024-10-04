import { useState } from 'react'
import './App.css'

function App() {
  
  const [num1,setNum1]=useState();
  const [num2,setNum2]=useState();
  const [result,setResult]=useState();


  return (
  
       
       <div className="container">

        <div className="inputs">
          
          <div className="num1Con">
            <span> First Number</span>
            <input type="text" id='num1' onChange={(e)=>setNum1(e.target.value)} />
          </div>

          <div className="num1Con">
            <span> Second Number</span>
            <input type="text" onChange={(e)=>setNum2(e.target.value)} />
          </div>

        </div>

        <div className="optBtn">
          <button onClick={(e)=>setResult(Number(num1)+Number(num2))}>Addition</button>
          <button onClick={(e)=>setResult(Number(num1)-Number(num2))}>Substraction</button>
          <button onClick={(e)=>setResult(Number(num1)*Number(num2))}>Multiplication</button>
          <button onClick={(e)=>setResult(Number(num1)/Number(num2))}>Division</button>
        </div>

        <div className="results">
          <h3 >{result}</h3>
        </div>

       </div>

  )
}

export default App
