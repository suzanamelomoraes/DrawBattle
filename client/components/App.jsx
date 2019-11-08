import React from 'react'
import Pixel from './Pixel'

const gameTime = 30000

class App extends React.Component {
  // const board = Array.from({ length: 50 }, () => (<Pixel />))
  state = {
    gameState: 'ready',
    timeRem: 0,
    intervalId: null
  }

  stopGame = () => {
    console.log(this.state.gameState)
    this.setState({ gameState: 'finished' })
  }

  startGame = () => {
    const intervalId = setInterval(() => {
      this.setState({ timeRem: this.state.timeRem - 1 })
    }, 1000)

    this.setState({ gameState: 'playing', timeRem: gameTime / 1000, intervalId },
      () => {
        setTimeout(() => {
          this.stopGame()
          console.log(intervalId)
          clearInterval(this.state.intervalId)
        }, gameTime)
      }
    )
  }

  render () {
    return (
      <React.Fragment>
        <div className='timer'>
          <span>{this.state.timeRem}</span>
        </div>

        <div>
          <div>
            <button onClick={this.startGame}>START</button>
          </div>

          <div>
            {Array.from({ length: 551 }, (curVal, idx) => (<Pixel key={idx} gameState={this.state.gameState}/>))}
          </div>
        </div>


      </React.Fragment>
    )
  }
}

export default App
