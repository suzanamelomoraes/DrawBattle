import React from 'react'
import Pixel from './Pixel'

const App = () => {
  // const board = Array.from({ length: 50 }, () => (<Pixel />))
  return (
    <div>
      {Array.from({ length: 64 }, () => (<Pixel />))}
    </div>

  )
}

export default App
