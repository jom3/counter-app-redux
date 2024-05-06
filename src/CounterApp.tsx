import './counter.css'
import { decrement, increment } from './redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from './redux/hook'

export const CounterApp = () => {

  const count = useAppSelector(state=>state.counterReducer.value)
  const dispatch = useAppDispatch()

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <h3 className="counter-count">{count}</h3>
      <div className="counter-buttons">
        <button className="button" onClick={()=>dispatch(increment())}>Increment</button>
        <button className="button" onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}