import React, { Component } from 'react'

class Slider extends Component {
  state = {
    Value1H: 320,
    Value2S: 100,
    Value3L: 100,
    ValueAlpha: 100,
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
  changeAlpha = event => {
    console.log(event.target.value)
    this.setState({
      ValueAlpha: event.target.value
    })
  }

  backgroundColorsCss = () => {
    return `hsl(${this.state.Value1H}, ${this.state.Value2S}%, ${
      this.state.Value3L
    }%, ${this.state.ValueAlpha}%`
  }

  getRandomColor = () => {
    this.setState({
      Value1H: Math.floor(Math.random() * 320),
      Value2S: Math.floor(Math.random() * 100),
      Value3L: Math.floor(Math.random() * 100),
      ValueAlpha: Math.random() * 100
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
              max="320"
              class="slider"
              id="myRange"
              onChange={this.change1H}
            />
            <h3 className="H">HUE</h3>
            <p className="number">{this.state.Value1H}</p>
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
            <h3 className="S"> SATURATION</h3>
            <p className="number">{this.state.Value2S}</p>
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
            <h3 className="L">LIGHTNESS</h3>
            <p className="number">{this.state.Value3L}</p>
          </div>
          <div class="sliderA">
            <input
              type="range"
              min="0"
              max="100"
              class="sliderA"
              id="myRange"
              onChange={this.changeAlpha}
            />
            <h3 className="A">ALPHA</h3>
            <p className="number">{this.state.ValueAplha}</p>
          </div>
          <button className="button" onClick={this.getRandomColor}>
            🌈{' '}
          </button>
        </body>
      </>
    )
  }
}

export default Slider
