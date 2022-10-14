import React, { useState } from 'react'

export default function Calculator() {
  // const [val, setVal] = useState();
  const [val, setVal] = useState("");

  const handleValue=(event)=>{
  //  let newVal=val+event.target.value    //"" + "1"=>"1"
  //  setVal(newVal)
   setVal(val+event.target.value)
  }

  const clearValues=()=>{
    try{
      setVal("");
    }
    catch{
       setVal("")
    }
   }

   const handleCalculation=()=>{
    try{
      //eslint-disable-next-line
         setVal(eval(val))
    }
    catch{
          setVal("Error")
    }
   }
  
const backSpace = ()=>{
  try{
  setVal(val.slice(0,-1))
  }
  catch(error){
    setVal("Error")
  }
}
  //  const [val1, setVal1]=useState("")
  
  return (
    <div className='container text-center'>
      <div className='row my-5'>
        <div className='col-md-5 offset-md-4'>
          <div className='card border-primary'>
         <input type="text" className='form-control' value={val}/>
         <div className="row my-1">
                <div className='col-3'>
                  <button className='btn btn-primary' value="1" onClick={handleValue}>1
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="2" onClick={handleValue}>2
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="3" onClick={handleValue}>3
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="AC" onClick={clearValues}>Ac
                  </button>
                </div>
         </div>
         <div className="row my-1">
                <div className='col-3'>
                  <button className='btn btn-primary' value="4" onClick={handleValue}>4
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="5" onClick={handleValue}>5
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="6" onClick={handleValue}>6
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="+" onClick={handleValue}>+
                  </button>
                </div>
         </div>
         <div className="row my-1">
                <div className='col-3'>
                  <button className='btn btn-primary' value="7" onClick={handleValue}>7
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="8" onClick={handleValue}>8
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="9" onClick={handleValue}>9
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="*" onClick={handleValue}>X
                  </button>
                </div>
         </div>
         <div className="row my-1">
                <div className='col-3'>
                  <button className='btn btn-primary' value="." onClick={handleValue}>.
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="0" onClick={handleValue}>0
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="/" onClick={handleValue}>/
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-primary' value="=" onClick={handleCalculation}>=
                  </button>
                </div>
         </div>
         <div className='col-3'>
                  <button className='btn btn-primary' value="backspace" onClick={backSpace}>Del
                  </button>
                </div>
              {/* <input type="text" value={val1} onChange={(e)=>setVal1(e.target.value)} />
              <input type="text" value={val1} onInput /> */}
          </div>

        </div>
      </div>

    </div>
  )
}
