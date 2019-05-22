import React, { Component } from 'react'

class Slider extends Component {
  state = {
    Value1H: 180,
    Value2S: 100,
    Value3L: 100,
    backgroundColor: ''
  }

  change1H = event => {
    console.log(event.target.value)
    this.setState({
      Value1H: event.target.value
    })
  }
  change2S = event => {
    console.log(event.target.value)
    this.setState({
      Value2S: event.target.value
    })
  }
  change3L = event => {
    console.log(event.target.value)
    this.setState({
      Value3L: event.target.value
    })
  }
  backgroundColorsCss = () => {
    return `hsl(${this.state.Value1H}, 50%, 50%)`
  }

  getRandomColor = () => {
    this.setState({
      Value1H: Math.floor(Math.random() * 180),
      Value2S: Math.floor(Math.random() * 100),
      Value3L: Math.floor(Math.random() * 100)
    })
  }

  componentDidMount = () => {
    this.getRandomColor()
  }

  render() {
    return (
      <>
        <body
          className=" body-yo"
          style={{
            backgroundColor: this.backgroundColorsCss()
          }}
        >
          <div class="slider1H">
            <input
              type="range"
              min="0"
              max="100"
              class="slider"
              id="myRange"
              onChange={this.change1H}
            />
          </div>
          <div class="slider2S">
            <input
              type="range"
              min="0"
              max="100"
              class="slider2"
              id="myRange"
              onChange={this.change2S}
            />
          </div>
          <div class="slider3L">
            <input
              type="range"
              min="0"
              max="100"
              class="slider3"
              id="myRange"
              onChange={this.change3L}
            />
          </div>
        </body>
      </>
    )
  }
}

export default Slider
