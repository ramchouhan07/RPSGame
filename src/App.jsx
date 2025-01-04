import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import StartPage from './stertPage/Start'
import GamePage from './stertPage/GamePage/GamePage'

function App() {
  const [count, setCount] = useState(0)
const Handler = ()=>{
  setCount(1)
}
  return (
    <>
    {count?<GamePage />: < StartPage onHandler = { Handler }/>
    }
    
    
    </>
  )
}

export default App
