// import React, { useState, useEffect, useRef } from 'react'
// import { Child } from './Child'

// export const Parent = () => {
//     const [count, setCount] = useState(0)
//     const [toggle, setToggle] = useState(true)
//     const inputElement = useRef(null)

//     useEffect(() => {
//         console.log('Parent did mount')
//         console.log(inputElement)
//         inputElement.current.focus()
//         inputElement.current.addEventListener('click', () => {
//         console.log('input click')
//         })
//     }, [])

//     useEffect(() => {
//         console.log('Count and Toggle changed')
//     }, [count, toggle])

//     return <>

//         <h3>Parent component</h3>
//         <p>{count}</p>
//         <button onClick={() => setCount(count + 1)}>click</button>
//         <button onClick={() => setToggle(!toggle)}>true</button>
//         <br/>
//         <input type="text" ref={inputElement}/>
//         <hr />
//         {toggle && <Child count={0}/>}
//     </>
// }
