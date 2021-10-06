import React, { useContext }from 'react';
import { AppContext } from '../context/AppContex';


const Budget = () => {
    const {budget}=useContext(AppContext)
    return (
     <div className='alert alert-success'>
        <span>BUDGET: ${budget}

        </span>
    </div>       
    );
};

export default Budget;