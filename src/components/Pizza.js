import React, { useState } from 'react'

function Pizza({pizza}) {
    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState('small')
    return (
    <>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{height: '200px', width:'200px'}} />
        <div className="flex-container">
            <div className="w-100">
                <p>Variants</p>
                <select className="form-control" value={variant} onChange={ (e)=> {
                    setVariant(e.target.value)
                }}>
                 {pizza.varients.map(variant => {
                        return <option value={variant}>{variant}</option>
                    })}

                </select>
            </div>

            <div className="w-100">
                <p>Quantity</p>
                <select className="form-control" value={quantity} onChange={(e)=> {
                    setQuantity(e.target.value)
                }}>
                    {[...Array(10).keys()].map((x, i)=> {
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
            </div>

        </div>

        <div className="flex-container">
            <div className="m-1 w-100">
                    <h1>Price: {pizza.prices[0][variant] * quantity }</h1>
            </div>

            <div className="m-1 w-100">
                    <button className="btn ">Add To Cart</button>
            </div>
        </div>
    </>
    )
}

export default Pizza
