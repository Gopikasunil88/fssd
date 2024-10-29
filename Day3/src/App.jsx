import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import State from './components/State'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import Name from './components/Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes> 
     
        <Route path='/s' element={<State/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/n' element={<Name/>}/>
        </Routes> 
    </>
  )
}

export default App
