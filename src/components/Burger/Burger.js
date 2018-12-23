import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const burger = (props) => {

    let transformedIngridient = Object.keys(props.ingridients).map(igKey => {
                                        return [...Array(props.ingridients[igKey])].map((_,i)=>{
                                      return <BurgerIngridient key={igKey + i} type={igKey} /> ;
                                    });
                                    
                                }).reduce((curr,elem)=>{
                                    return curr.concat(elem);
                                },[]);

    if(transformedIngridient.length===0){
        transformedIngridient = <p>Please start adding ingridients!</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {transformedIngridient}
            <BurgerIngridient type="bread-bottom"/>

        </div>
    )
};

export default burger;