import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    
    setCount(count+1);
    if(count>=20){
      let count=0;
      setCount(count);
     
    }
  }
  const removeValue = () => {
    setCount(count-1);
    if(count<=0){
      let count=0;
      setCount(count);
    }
  }

  return (
    <>
    <h2 text-align:center>counter :{count}</h2>
    <button onClick ={addValue} style={{backgroundColor: 'salmon', color: 'white',width:100, height:50}}> addValue</button>
    <br></br>
    <button onClick ={removeValue} style={{backgroundColor: 'salmon', color: 'white',width:100, height:50}}> removeValue</button>
    
    </>
    
  )
}

export default App
