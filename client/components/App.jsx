import React from 'react'
import Pixel from './Pixel'
import Prompt from './Prompt'

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
  clearBoard = () => {
    document.location.reload()
  }

  render () {
    return (
      <React.Fragment>
        <h1>Draw Battle!</h1>
        <div className='timer'>
          <span>{this.state.timeRem}</span>
        </div>

        <div>
          <div>
            <button onClick={this.startGame}>START</button>
            <button onClick={this.clearBoard}>CLEAR</button>
          </div>

          <div>
            {Array.from({ length: 551 }, (curVal, idx) => (<Pixel key={idx} gameState={this.state.gameState}/>))}
          </div>

          <div className="prompt">
            <Prompt/>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default App
