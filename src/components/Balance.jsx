import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);
    const sumTotal = amounts.reduce((total,amount) => (total+amount),0).toFixed(2);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${sumTotal}</h1>
        </div>
    )
}
export default Balance