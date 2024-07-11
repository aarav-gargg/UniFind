import { useState } from 'react'

import './App.css'
import Navbar from './Components/navbar/Navbar'
import FormPage from './Components/InputForm/FormPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormPage/>
    </>
  )
}

export default App
