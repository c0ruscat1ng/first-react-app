import React from 'react'
import './App.scss'
import BalanceCard from "./components/BalanceCard/BalanceCard";
import Actions from "./components/Actions/Actions";
import Statistic from "./components/Statistic/Statistic";
import Menu from "./components/Menu/Menu";

function App() {

  return (
      <div className="App">
          <BalanceCard/>
          <Actions/>
          <Statistic/>
          <Menu/>
      </div>
  );
}

export default App;
