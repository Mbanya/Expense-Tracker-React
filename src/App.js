import './App.css';
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpenses";
import TransactionList from "./components/Transaction/TransactionList";
import AddTransactionForm from "./components/Transaction/AddTransactionForm";

import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header/>
        <div className="container">
        <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransactionForm/>
        </div>
    </GlobalProvider>
  );
}

export default App;
