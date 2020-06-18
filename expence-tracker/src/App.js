import React from 'react';

import './App.css';
import Header from './components/Header'
import Balence from './components/Balence';
import IncomeExpence from './components/IncomeExpence';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalStates';
function App() {
  return (
    <div className="App">
      <GlobalProvider>
     <Header/>
     <div className="container">
       <Balence/>
       <IncomeExpence/>
       <TransactionList/>
       <AddTransaction/>
     </div>
     </GlobalProvider>

    </div>
  );
}

export default App;
