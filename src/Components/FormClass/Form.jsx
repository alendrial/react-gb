import React, { Component, Fragment } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { Message } from "./Message"

export class Form extends Component {
  state = {
    name: "Click here!",
    value: "",
    messages: [],
    visible: true,
  }

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] })
    this.setState({ value: "" })
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  componentDidMount() {
    console.log("form did mount")
  }

  componentDidUpdate() {
    console.log("component updated")
  }

  render() {
    return (
      <Fragment>
        {this.state.visible && <>
        <Input change={this.handleChange} value={this.state.value} />
        <br />
        
        <Button
          className="add-btn"
          name={this.state.name}
          click={this.handleClick}
          type="submit"
        />
        <button
          className="rm-btn"
          onClick={() => this.setState({ messages: [] })}
        >
          Clear messages
        </button>
        </>
        }
        <button
          className="hide-btn"
          onClick={() => this.setState({ visible: !this.state.visible })}
        >
          {this.state.visible ? "Hide messages" : "Show messages"}
        </button>
        
        {this.state.visible && <Message post={this.state.messages} />}
      </Fragment>
    )
  }
}
