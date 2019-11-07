import React from 'react'

// const HexColor = () =>
//   `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

// on-click until user finds color
// once color is found, user can drag cursor?

class Pixel extends React.Component {
  state = {
    backgroundColor: 'blanchedalmond'
  }
  draw = () => {
    this.setState(
      { backgroundColor: 'lime' }
    )
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
      <div className='pixel' style={stylie} onClick={this.draw} onContextMenu={this.erasePixel}></div>

    // </>
    )
  }
}

export default Pixel
