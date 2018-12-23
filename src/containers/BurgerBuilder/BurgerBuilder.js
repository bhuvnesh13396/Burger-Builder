import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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

        totalPrice : 15,
        purchasable : false,
        purchasing : false
    }

    updatePurchasableState(ingridients) {
        const updatedIngridients = {
            ...ingridients
        };

        const sum = Object.keys(updatedIngridients)
                            .map(igKey => {
                                return updatedIngridients[igKey];
                            })
                            .reduce((sum,elem) => {
                                return sum+elem;
                            },0);

        this.setState({purchasable : sum>0});
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
        this.updatePurchasableState(updatedIngridients);
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
            this.updatePurchasableState(updatedIngridientState);
        } 
        
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
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
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingridients={this.state.ingridients} />
                </Modal>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls 
                    ingridientsAdded = {this.addIngridientHandler} 
                    ingridientsRemoved = {this.removeIngridientHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    totalPrice = {this.state.totalPrice}
                    />
            </Aux>
        );

    }
}

export default BurgerBuilder;