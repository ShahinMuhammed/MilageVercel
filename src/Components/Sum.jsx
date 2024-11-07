import React, { useState } from 'react'

function Sum() {
    const[sum,setSum]=useState(0)


    const handleSubmit=()=>{
        preventDefault()
    }

    const handleClick=(event)=>{
        const value=event.target.value
        setSum(sum+value)

    }
    return (

        <>
        <form onSubmit={handleSubmit}>
            <label >First number <input type='text' name='fnum' /></label> <br />
            <label >Second number <input type='text' name='snum' /></label>
            <button onClick={handleClick}>Sum</button>         
        </form>

        <h1>Sum {sum}</h1>
        </>
        
    )
}

export default Sum