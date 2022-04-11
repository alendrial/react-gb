import React, { useState, Fragment, useCallback } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { Message } from "./Message"
import { InputAuthor } from "./InputAuthor"

export const Form = () => {
  const styles = {
    ul: {},
  }

  const message = {
    author: '',
    text: '',
  }

  const [name, setName] = useState("Click here!")
  const [value, setValue] = useState("")
  const [messages, setMessages] = useState([])
  const [messagesList, setMessagesList] = useState([])
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setMessages([...messages, value])
    setValue("")
  }

  const handleClickMessageList = () => {
    setMessagesList([...messagesList, message])
  }

  const handleChange = useCallback((event) => {
    setValue(event.target.value)
  },[])

  return (
    <Fragment>
      <div className="FormFlexBox">

        <Input change={handleChange} value={value} />

        <InputAuthor change={handleChange} value={value} />

      </div>
      
      <div className="ButtonFlexBox">
      
        <Button
        className="add-btn"
        name={name}
        click={handleClick}
        type="submit"
        />
      
        <button className="hide-btn" onClick={() => setVisible(!visible)}>
          {visible ? "hide" : "show"}
        </button>
      
        <button className="rm-btn" onClick={() => setMessages([])}>
          Clear messages
        </button>

      </div>

      {visible && <Message post={messages} />}
    
    </Fragment>
  )
}
