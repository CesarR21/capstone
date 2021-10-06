import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseList = () => {
    const expenses = [
        { id: 1231232, name: 'Rent', cost: 1000},
        { id: 1231232, name: 'Cable', cost: 100},
        { id: 1231232, name: 'Car Note', cost: 300},
        { id: 1231232, name: 'Entertainment', cost: 200},
        { id: 1231232, name: 'Groceries', cost: 200},
    ];
    
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