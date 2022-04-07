import React, { useState, Fragment } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import Message from './Message';

const Form = () => {
     const styles = {
         ul: {},
     }
    
    const [name, setName] = useState('Click here!');
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [visible, setVisible] = useState(true);


    const handleClick = () => {
        setMessages([...messages, value]);
        setValue('')
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    } 
  
    return <Fragment>
        {visible && <ul styles = {styles.ul}>
        {messages.map((message) =>
        <li>{message}</li>)}
        </ul>}
        <Input change={handleChange} value={value}/>
        <Button name={name} click={handleClick} type='submit'/>
        <button onClick={() => setVisible(!visible)}>{visible ? 'hide' : 'show'}</button>
    </Fragment>
    
}

export default Form