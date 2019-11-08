import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

// on-click until user finds color
// once color is found, user can drag cursor?

let currentColor = randomHexColor()

class Pixel extends React.Component {
  state = {
    backgroundColor: 'blanchedalmond'
  }

  draw = () => {
    this.setState(
      { backgroundColor: currentColor }
    )
  }

  changeColor = () => {
    currentColor = randomHexColor()
  }

  erasePixel = (event) => {
    event.preventDefault()
    this.setState(
      // on right-click, erase colored pixel
      // prevent default setting
      { backgroundColor: 'blanchedalmond' }
    )
  }

  render () {
    const stylie = { height: '30px', width: '30px', backgroundColor: this.state.backgroundColor }

    return (
    // <>
    
      <div className='pixel' style={stylie} onClick={this.draw} onContextMenu={this.erasePixel} onDoubleClick={this.changeColor}>
      </div>

    // </>
    )
  }
}

export default Pixel
