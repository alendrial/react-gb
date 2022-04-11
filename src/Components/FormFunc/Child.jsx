import React, { useState, useEffect, memo } from 'react'


export const Child = memo((props) => {
    const [count, setCount] = useState(0)
    console.log('child render')
    let interval

    useEffect(() =>{
        console.log('child did mount')
        // interval = setInterval(() => console.log(1), 1000)
        // return () => {
        //     console.log('child did unmount')
        //     clearInterval(interval)
        // }
    }, [])

    return <>
       
        <h3>Child</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>click</button>
    </>
})