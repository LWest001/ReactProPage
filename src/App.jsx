import { useState } from 'react'
import './App.css'
import {Hero} from "./Containers/Hero/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero/>
      <h1>Leo Westebbe</h1>
      <h2>Fullstack Web Developer</h2>
      <p className="read-the-docs">
      </p>
    </div>
  )
}

export default App
