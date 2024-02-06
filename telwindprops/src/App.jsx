import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 mb-4'>This is a Nupur Shivani </h1>
     <Card userName="NUPUR SHIVANI" btnText="Click Me" src="src\assets\IMG20231128143101.jpg"/>
     <Card userName="Bacchi" btnText="Do not click Me" src="src/assets/IMG20231128141604.jpg"/>
    </>
  )
}

export default App
