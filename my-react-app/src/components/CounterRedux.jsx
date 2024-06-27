import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiplyBy2 } from "../state/counterSlice";


export default function CounterRedux() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div className="text-center max-w-max p-6 bg-white border border-gray-200 rounded-2xl m-5 shadow-md dark:bg-emerald-800 dark:border-gray-700">
            <span className="text-4xl">{count}</span><br />
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

