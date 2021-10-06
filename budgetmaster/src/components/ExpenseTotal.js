import React, {useContext} from 'react';
import { AppContext } from '../context/AppContex';

const ExpenseTotal = () => {
    const {expenses}= useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total,item)=>{
        return (total += item.cost)
    }, 0);

    return (
        <div className="alert alert-primary">
            <span>SPENT SO FAR:${totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;