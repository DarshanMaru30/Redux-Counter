import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './app/counterSlice';
function App() {
  const count = useSelector((state) => state.data.value)
  const temp = useSelector((state) => state.data.temp)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>Counter</h1>
        <div>
          <input type="text" value={temp} onChange={(e) => {dispatch(incrementByAmount(e.target.value)) }} />
          <h1>{count}</h1>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
