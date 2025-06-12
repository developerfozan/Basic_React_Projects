// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Component from './fozan_components/Component'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-500 p-4 rounded-xl mb-4'>Tailwind Testing</h1>
      <Component title='Science of Chemstry'/>
      <Component title="New Title" rating='4.5'/>
    </>
  )
}

export default App
