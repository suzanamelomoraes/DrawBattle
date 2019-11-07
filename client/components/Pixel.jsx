import React from 'react'

class Pixel extends React.Component {
  state = {
    backgroundColor: 'bisque'
  }

  render () {
    const stylie = { height: '30px', width: '30px', backgroundColor: this.state.backgroundColor }
    return (
    // <>

      <div className='pixel' style={stylie}></div>
    // </>
    )
  }
}

export default Pixel
