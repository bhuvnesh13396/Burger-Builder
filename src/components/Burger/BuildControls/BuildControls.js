import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
     {label:'Salad',type:'salad'},
     {label:'Cheese',type:'cheese'},
     {label:'Meat',type:'meat'},
     {label:'Bacon',type:'bacon'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Total Price {props.totalPrice}</p>
        {controls.map((ctrl)=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingridientsAdded(ctrl.type)} 
            removed={() => props.ingridientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} 
            />
        ))}

        <button 
        className={classes.OrderButton}
        onClick={props.ordered}
        disabled={!props.purchasable}>ORDER NOW!</button>
    </div>
);

export default buildControls;
