import React, {useContext, useState} from 'react'
import {GlobalContext} from "../../context/GlobalState";

const AddTransactionForm = () => {

    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} placeholder={"Enter text ..."}
                           onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/> (negative - expense, positive -income)</label>
                    <input type="number" value={amount} placeholder={"Enter amount ..."}
                           onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
export default AddTransactionForm