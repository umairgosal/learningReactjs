import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiplyBy2 } from "../state/counterSlice";


export default function CounterRedux() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <span>{count}</span><br />
            <button onClick={()=> dispatch(increment())}>
                Increment
            </button>
            <button onClick={()=> dispatch(decrement())}>
                Decrement
            </button>
            <button onClick={()=> dispatch(multiplyBy2())}>
                multiplyBy2
            </button>
        </div>
    );
    }

