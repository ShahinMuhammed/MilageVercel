import React from "react";
import './List.css'

function List() {

    const cars = [
        { id: 1, make: 'Toyota', model: 'Camry', year: 2020, price: 24000 },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019, price: 22000 },
        { id: 3, make: 'Ford', model: 'Mustang', year: 2021, price: 30000 },
        { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018, price: 21000 },
        { id: 5, make: 'Tesla', model: 'Model 3', year: 2022, price: 35000 }];
    return (
        <>
            <table >
                <tr>
                    <th >ID</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price</th>
                </tr>
                
                {cars.map(i=><tr key={i.id}>
                    <td>{i.id}</td>
                    <td>{i.make}</td>
                    <td>{i.model}</td>
                    <td>{i.year}</td>
                    <td>{i.price}</td>
                </tr>)}
                
                
                
            </table>

        </>
    )
}

export default List