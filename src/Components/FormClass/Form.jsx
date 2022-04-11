import React, { Component, Fragment } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { Message } from "./Message"
import { InputAuthor } from "./InputAuthor"

export class Form extends Component {
  constructor(props) {
    super(props) 
      this.myRef = React.createRef()
      this.state = {
      name: "Click here!",
      value: "",
      messagesList: [],
      message: {
        author: "",
        text: "",
      },
      messages: [],
      visible: true,
      // count: 0,
      }
    }

  // state = {
  //   name: "Click here!",
  //   value: "",
  //   messages: [],
  //   visible: true,
  //   count: 0,
  // }

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] })
    this.setState({ value: "" })
  }

  handleClickMessageList = () => {
    this.setState({ messagesList: [...this.state.messagesList, this.state.message]})
    console.log(this.state.message.author, this.state.message.text)
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  handleChangeAuthor = (event) => {
    this.setState({ message : event.target.value })
  }

  componentDidMount() {
    console.log("form did mount")
    // this.myRef.current.focus()
  }

  

  componentDidUpdate() {
    console.log("component updated")
  }

  render() {
    return (
      <Fragment>
        <div className="FormFlexBox">
        <Input change={this.handleChange} value={this.state.value} ref={this.myRef}/>
        <InputAuthor change={this.handleChangeAuthor} value={this.state.value} ref={this.myRef}/>
        </div>
        <div className="ButtonFlexBox">

          <button
            className="rm-btn"
            onClick={() => this.setState({ messages: [] })}
          >
            Clear messages
          </button>

          <button
            className="hide-btn"
            onClick={() => this.setState({ visible: !this.state.visible })}
          >
            {this.state.visible ? "Hide messages" : "Show messages"}
          </button>

          <Button
            className="add-btn"
            name={this.state.name}
            click={this.handleClick}
            type="submit"
          // count={this.state.count}
          />

        </div>

        {this.state.visible && <Message post={this.state.messages} />}

        {/* <br />

        <h2>Parent component</h2>
        
        <p>{this.state.count}</p>
        
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button> */}

        {/* <input type="text" ref={this.myRef} /> */}

      </Fragment>
    )
  }
}
