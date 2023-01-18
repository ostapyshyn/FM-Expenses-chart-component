import { useEffect, useState } from 'react';
import './App.css';
import Balance from './components/Balance';
import Expense from './components/Expense';

import data from './assets/data.json';

function App() {
  const [max, setMax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(data.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0));
    setMax(
      Math.max.apply(
        null,
        data.map(function (o) {
          return o.amount;
        }),
      ),
    );
  }, []);

  const amount = 921.48;

  return (
    <main>
      <div className="App">
        <Balance amount={amount} />
        <Expense expenses={data} total={total} max={max} />
      </div>
    </main>
  );
}

export default App;
