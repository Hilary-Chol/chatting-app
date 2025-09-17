import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sider from './side_bar.jsx'
import './App.css'
import Chatting_space from './Chatting_space.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sider />
    <Chatting_space />
    </>
  )
}

export default App
