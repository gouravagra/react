import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-l px-3 py-2 rounded-xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1  text-white rounded-full'
          style={{backgroundColor: "red"}}>RED</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 py-1  text-white rounded-full'
          style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1  text-white rounded-full'
          style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1  text-white rounded-full'
          style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1  text-white rounded-full'
          style={{backgroundColor: "pink"}}>pink</button>
          <button  onClick={()=> setColor("black")}className='outline-none px-4 py-1  text-white rounded-full'
          style={{backgroundColor: "black"}}>Black</button>
          <button onClick={()=> setColor("white")} className='outline-none px-4 py-1  text-white rounded-full'
          style={{backgroundColor: "black"}}>white</button>
        </div>
      </div>
    </div>
  )
}

export default App
