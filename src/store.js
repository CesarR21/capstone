import React, { Component } from "react";


const BudgetContext = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case"ADD_BUDGET":
        return {
            ...state,
            budget: action.budget
        }
        default:
            return state 
    }

}

class BudgetProvider extends Component{ 

    state = {
        budget: 10000,
        expenses: [
            {title: 'Investments', amount: 2000},
            {title: 'Supplies', amount: 1000},
            {title: 'Location Rent', amount: 2000},

         ],
        dispatch: action => this.setState(state => reducer(state,action))
    }

    render(){
        return(
            <BudgetContext.Provider value={this.state}>
                {this.props.children}
            </BudgetContext.Provider>
        )
    }
}

const BudgetConsumer = BudgetContext.Consumer;

export { BudgetProvider, BudgetConsumer }