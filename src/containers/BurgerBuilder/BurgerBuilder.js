import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICES = {
    cheese : 5,
    bacon : 10,
    meat : 20,
    salad : 1
};

class BurgerBuilder extends Component{

    state = {
        ingridients : {
            cheese:0,
            bacon:0,
            salad:0,
            meat:0

        },

        totalPrice : 15
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingridients
        }

        updatedIngridients[type]=updatedCount;
        const updatedTotalPrice = INGRIDIENT_PRICES[type] + this.state.totalPrice;
        this.setState({totalPrice:updatedTotalPrice , ingridients:updatedIngridients});
    }

    removeIngridientHandler = (type) => {
        if(this.state.ingridients[type]>0){
            const updatedCount = this.state.ingridients[type]-1;
            const updatedTotalPrice = this.state.totalPrice-INGRIDIENT_PRICES[type];

            const updatedIngridientState = {
                ...this.state.ingridients
            };
            updatedIngridientState[type]=updatedCount;
            this.setState({totalPrice:updatedTotalPrice , ingridients:updatedIngridientState});
        } 
        
    }

    render(){
        const disabledInfo = {
            ...this.state.ingridients
        };

        for (let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }

        return (
            <Aux>
                
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls 
                    ingridientsAdded = {this.addIngridientHandler} 
                    ingridientsRemoved = {this.removeIngridientHandler}
                    disabled = {disabledInfo}
                    totalPrice = {this.state.totalPrice}
                    />
            </Aux>
        );

    }
}

export default BurgerBuilder;