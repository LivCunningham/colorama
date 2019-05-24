import React, { Component } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'

class App extends Component {
  render() {
    return (
      <>
        <Slider>
          <Header />
          <body />
        </Slider>
      </>
    )
  }
}

export default App
