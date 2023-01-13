import './App.css';
import Balance from './components/Balance';
import Total from './components/Total';

function App() {
  return (
    <>
      <div className="App">
        <Balance amount={921.48} />
        <Total total={478.33} />
      </div>
    </>
  );
}

export default App;
