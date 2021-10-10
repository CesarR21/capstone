import React, { Component } from 'react';

class ExpenseList extends Component{
    render(){
        return(
            <div className="card card-body">
                <table className="table-borderd">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>Amount</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExpenseList;