import React, { useState, Fragment } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { Message } from "./Message"

export const Form = () => {
  const styles = {
    ul: {},
  }

  const [name, setName] = useState("Click here!")
  const [value, setValue] = useState("")
  const [messages, setMessages] = useState([])
  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setMessages([...messages, value])
    setValue("")
  }

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  },[])

  return (
    <Fragment>
      <Input change={handleChange} value={value} />
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
      {visible && <Message post={messages} />}
    </Fragment>
  )
}
