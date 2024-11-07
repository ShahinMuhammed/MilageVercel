import React, { useState } from 'react'

function MilageCalculator() {
    const[milage,setMilage]=useState(null)
    const mile=70
    const petrolPrice=105.46
    const [petrolLiter,setpetrolLiter]=useState()
    const[totalCost,setTotalCost]=useState(null)


    const handleChange=(event)=>{
        // const name=event.target.name
        const value=event.target.value
        // setMilage({...milage,[name]:value})
        setMilage(value)
        console.log("Milage",milage)
    }

    const calculate=()=>{   
        let cost=milage/mile
        
        console.log(cost)
        setTotalCost(cost*petrolPrice)
        
        

    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        setpetrolLiter(totalCost/petrolPrice)
    }

  return (
    <div>
      <h1>Milage Calculator</h1>
      <form onSubmit={ handleSubmit}>
        {/* <label >Enter the Milage <input type="number" name="Milage" onChange={handleChange}/></label> <br /><br /> */}
        {/* <label >Enter the Petrol Price <input type="number" name="Petrol" onChange={handleChange}/></label><br /><br /> */}
        <label >Enter the Distance Travelled <input type="number" name="Travelled" onChange={handleChange}/></label><br /><br />
        <button onClick={calculate}>Calculate</button>
      </form>
      <h3>Total Petrol Cost is {totalCost}</h3>
      <h3>Total Petrol in liters {petrolLiter}</h3>
    </div>
  )
}

export default MilageCalculator
