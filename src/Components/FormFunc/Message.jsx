import React from 'react';

export const Message = (props) => {
   
    const styles = {
        ul: {
            listStyle: 'square',
       
        },
        li: {
            color: 'purple',
        }
    }
    return (
        <ul style={styles.ul} className="msg-block">
            {props.post.map((message) => (
              <li style={styles.li}>{message}</li>
            ))}
        </ul>
    )
}
