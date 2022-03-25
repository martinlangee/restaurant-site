import React from 'react';
import "./Basket.css";
import OrderedDish from './OrderedDish'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';


const Basket = () => {
    console.log('basket is running')

    return (
    <>
    <h2>Basket (0)</h2>

    <div className="line"></div>


    <div className="container">
        <div className="checkoutBox">

                <OrderedDish/>

        </div>
        <div>
            <div className="checkoutBox">
                <h2>Delivering time</h2>
                <div className="container">
                    <Radio
                        // checked={selectedValue === 'b'}
                        // onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                    />
                    <p>as soon as possible</p>
                </div>
                
            </div>
            <div className="price container checkoutDetails">
                <p>Subtotal</p>
                <p>9.00€</p>
                <p>Delivery costs</p>
                <p>free</p>
                <p>Total costs</p>
                <p>9.00€</p>
            </div>
            <Button variant="contained">Checkout</Button>

        </div>
    </div>
    <div className="line"></div>

    </>

    )
}

export default Basket