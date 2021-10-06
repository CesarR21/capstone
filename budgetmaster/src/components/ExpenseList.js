import React, {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContex';


const ExpenseList = () => {
    const { expenses}= useContext(AppContext)
    return (
        <ul className="List-group">
            {expenses.map((expense)=>(
                <ExpenseItem  
                id={expense.id} name={expense.name} cost={expense.cost}/>
            ))}
        </ul>
    );
};

export default ExpenseList;