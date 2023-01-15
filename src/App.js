import './App.css';
import Balance from './components/Balance';
import Expense from './components/Expense';

function App() {
  const amount = 921.48;
  const expenses = [];
  return (
    <main>
      <div className="App">
        <Balance amount={amount} />
        <Expense expenses={expenses} />
      </div>
    </main>
  );
}

export default App;
