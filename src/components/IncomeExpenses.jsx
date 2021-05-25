import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    // const income = amounts.reduce((total,amount) => {
    //     if(amount > 0){
    //         total+=amount;
    //     }
    //     return total;
    // });
    //
    // const expenses = amounts.reduce((total,amount) => {
    //     if(amount < 0){
    //         Math.abs(total+=amount);
    //     }
    //     return total;
    // });

    const income = amounts.filter(item => item > 0)
        .reduce((total,amount) => (total + amount),0)
        .toFixed(2);
    const expenses = amounts.filter(item => item < 0)
        .reduce((total,amount) => (total + amount),0)
        .toFixed(2);



    return (
        <div className={'inc-exp-container'}>
            <div>
                <h4>Income</h4>
                <p  className="money plus">
                    +${income}
                </p>
            </div>

            <div>
                <h4>Expense</h4>
                <p  className="money minus">
                    ${expenses}
                </p>
            </div>
        </div>
    )
}
export default IncomeExpense