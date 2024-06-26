import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiplyBy2 } from "../state/counterSlice";


export default function CounterRedux() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div className="card">
            <span>{count}</span><br />
            <button className="btn btn-primary" onClick={()=> dispatch(increment())}>
                Increment
            </button>
            <button className="btn btn-primary" onClick={()=> dispatch(decrement())}>
                Decrement
            </button>
            <button className="btn btn-primary" onClick={()=> dispatch(multiplyBy2())}>
                multiplyBy2
            </button>
        </div>
    );
    }

