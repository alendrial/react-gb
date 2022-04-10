import React, { Component } from "react"

export class Button extends Component {
  
  constructor(props) {
    super(props)
    this.interval = null
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(1)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentDidUpdate() {
    console.log('button did update')
  }

  render() {
    return <button onClick={this.props.click}>{this.props.name}</button>
  }
}
