import React, {
  useState,
  Fragment,
  useCallback,
  useRef,
  useEffect,
  FC,
} from 'react';
import { Input } from './../InputMessage/Input';
import { Button } from './../Button/Button';
import { InputAuthor } from './../InputAuthor/InputAuthor';
import { Chat } from './../Chat/Chat';
import { Message } from './../Chat/Message/Message'

export interface FormProps {
  defaultMessage: string;
  defaultAuthor: string;
  visible: boolean;
  robotMessage: boolean;
}


export const Form: FC<FormProps> = () => {
  const [name, setName] = useState<string>('Send message!');

  const [defaultMessage] = useState<string>('Your message has been received!');
  const [defaultAuthor] = useState<string>('Call me mr. Robot!');

  const [message, setMessage] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [messagesList, setMessagesList] = useState<Message[]>([]);
  const [time, setTime] = useState<string>('');

  const [visible, setVisible] = useState(true);

  const createCurrentTime = () => {
    let time = new Date();
    return `${time.getHours()} : ${
      (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
    }`;
  };

  const handleClick = () => {
    setMessagesList([
      ...messagesList,
      { message, author, time, robotMessage: false },
    ]);
    setMessage('');
    setAuthor('');
    setTime('');
  };

  const changeM = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }, []);

  const changeAu = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
    setTime(createCurrentTime());
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.focus()
}, [messagesList])

  useEffect(() => {
    if (
      messagesList.length &&
      !messagesList[messagesList.length - 1].robotMessage
    ) {
      alert('Wait for your response, it will take a few seconds');
      const timeout = setTimeout(() => {
        setMessagesList([
          ...messagesList,
          {
            message: defaultMessage,
            author: defaultAuthor,
            time: `${createCurrentTime()}`,
            robotMessage: true,
          },
        ]);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messagesList]);

  return (
    <Fragment>
      <div className="formFlexBox">
        <Input change={changeM} message={message} ref={inputRef} />

        <InputAuthor change={changeAu} author={author} />
      </div>

      <div className="buttonFlexBox">
        <Button
          className="add-btn"
          name={name}
          click={handleClick}
          type="submit"
          disabled={message && author ? false : true}
        />

        <button className="hide-btn" onClick={() => setVisible(!visible)}>
          {visible ? 'hide' : 'show'}
        </button>

        <button className="rm-btn" onClick={() => setMessagesList([])}>
          Clear messages
        </button>
      </div>

      {visible && <Chat post={messagesList} />}
    </Fragment>
  );
};
