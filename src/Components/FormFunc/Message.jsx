import React from 'react'

export const Message = (props) => {
  const styles = {
    ul: {
      listStyle: "square",
    },
    li: {
      color: '#f72d77',
    },
  }
  return (
    <ul style={styles.ul} className="msg-block">
      {props.post.map((message) => (
        <li style={styles.li}>{message}</li>
      ))}
    </ul>
  )
}
