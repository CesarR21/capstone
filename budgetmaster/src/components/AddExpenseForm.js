import React from "react";

const AddExpenseForm = () =>{
    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>NAME</label>
                    <input 
                    required='required' 
                    tpye='text'
                    className='form-control' 
                    id='name'
                    ></input>
            </div>
            <div className='col-sm'>
                <label for='cost'>COST</label>
                <input 
                required='REQUIRED'
                type='text'
                className='form-control' 
                id='cost'
                ></input>
            </div>
            <div className='col-sm'>
            <button type='submit' className='btn btn-success'>
                save
            </button>
            </div>
            </div>
        </form>
    );
};
export default AddExpenseForm;