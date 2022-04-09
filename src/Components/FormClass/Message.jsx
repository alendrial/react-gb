import React, { Component } from "react"

export class Message extends Component {
  styles = {
    ul: {
      listStyle: "square",
    },
    li: {
      color: "purple",
    },
  }
  render() {
    return (
      <>
        <ul style={this.styles.ul} className="msg-block">
          {this.props.post.map((message) => (
            <li style={this.styles.li}>{message}</li>
          ))}
        </ul>
      </>
    )
  }
}
