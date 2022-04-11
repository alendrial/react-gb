import React, { Component } from "react"

export class InputAuthor extends Component {


  render() {
    return (
      <>
        <input
          className="InputAuthor"
          type="text"
          value={this.props.value}
          placeholder="Enter author name"
          onChange={this.props.change}
        />
      </>
    )
  }
}
