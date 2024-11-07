import React, { useState } from 'react'
import axios from 'axios'

function API() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const getData = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            setData(response.data.products)
            console.log(data)
            
        }

        catch (error) {
            setError(error)
        }

    }
    

    if (error) {
        return <p>Error {error.message}</p>
    }

    return (
        <>
            <button onClick={getData}>Click</button>
            {data.filter(i =>i.category ==="groceries" && i.price >= 5 && i.price <= 10).map(i => <div key={i.id}>
                <p>title: {i.title} <br />
                    category:{i.category} <br />
                    Price: {i.price} <br />
                    Availability:{i.availabilityStatus} <br />
                    <img src={i.images[0]} alt='none' />
                </p>
                
            </div>)}
        </>

    )
}


export default API