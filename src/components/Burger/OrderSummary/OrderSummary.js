import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingridientSummary = Object.keys(props.ingridients).map(igKey => {
        return (
        <li>
            <span style={{textTransform:'capitalize'}}>{igKey} </span>: {props.ingridients[igKey]} 
        </li>
        
        );
    });


    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious order with following ingridients.</p>
            <ul>
                {ingridientSummary}
            </ul>

            <p>Continue with Checkout?</p>
        </Aux>
    );
}

export default orderSummary;