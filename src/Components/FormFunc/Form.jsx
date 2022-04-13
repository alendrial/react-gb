import React, {
  useState,
  Fragment,
  useCallback,
  useRef,
  useEffect,
} from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { InputAuthor } from "./InputAuthor"
import { Chat } from "./Chat"

export const Form = () => {
  const [name, setName] = useState("Send message!")

  const [defaultMessage] = useState("Your message has been received!")
  const [defaultAuthor] = useState("Call me mr. Robot!")

  const [message, setMessage] = useState("")
  const [author, setAuthor] = useState("")
  const [messagesList, setMessagesList] = useState([])
  const [time, setTime] = useState("")

  const [visible, setVisible] = useState(true)

  const createCurrentTime = () => {
    let time = new Date()
    return `${time.getHours()} : ${
      (time.getMinutes() < 10 ? "0" : "") + time.getMinutes()
    }`
  }

  const handleClick = () => {
    setMessagesList([
      ...messagesList,
      { message, author, time, robotMessage: false },
    ])
    setMessage("")
    setAuthor("")
    setTime("")
  }

  const changeM = useCallback((event) => {
    setMessage(event.target.value)
  }, [])

  const changeAu = useCallback((event) => {
    setAuthor(event.target.value)
    setTime(createCurrentTime())
  }, [])

  useEffect(() => {
    if (
      messagesList.length &&
      !messagesList[messagesList.length - 1].robotMessage
    ) {
      alert("Wait for your response, it will take a few seconds")
      const timeout = setTimeout(() => {
        setMessagesList([
          ...messagesList,
          {
            message: defaultMessage,
            author: defaultAuthor,
            time: `${createCurrentTime()}`,
            robotMessage: true,
          },
        ])
      }, 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messagesList])

  return (
    <Fragment>
      <div className="FormFlexBox">
        <Input change={changeM} message={message} />

        <InputAuthor change={changeAu} author={author} />
      </div>

      <div className="ButtonFlexBox">
        <Button
          className="add-btn"
          name={name}
          click={handleClick}
          type="submit"
          disabled={message && author ? false : true}
        />

        <button className="hide-btn" onClick={() => setVisible(!visible)}>
          {visible ? "hide" : "show"}
        </button>

        <button className="rm-btn" onClick={() => setMessagesList([])}>
          Clear messages
        </button>
      </div>

      {visible && <Chat post={messagesList} />}
    </Fragment>
  )
}
