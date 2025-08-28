import { useReducer } from "react"
type ActionTypes = {
    type: "increase" | "decrease" | "random" | "reset";
    payload?: number;
}
const initialState = 10
const reducer = (state: number, action: ActionTypes) => {
    console.log("State : ", state);
    console.log("action ", action);
    switch (action.type) {
        case "increase":
            return (state += 1)
        case "decrease":
            return (state -= 1)
        case "random":
            return action.payload ? action.payload : state
        case "reset":
            return (state = 0)
        default:
            return state
    }
}

export default function DemoUse() {
    // const [count, setCount] = useState<number>(0)
    const [count, dispatch] = useReducer(reducer, initialState)
    const handleIncrease = (): void => {
        // setCount(prev => prev + 1)
        dispatch({ type: "increase" })


    }
    const handleDecrease = (): void => {
        // setCount(prev => prev - 1)
        dispatch({ type: "decrease" })
    }
    const handleRandom = (): void => {
        dispatch({ type: "random", payload: Math.ceil(Math.random() * 100) })
    }
    const handleReset = (): void => {
        dispatch({ type: "reset" })
    }
    return (
        <>
            <div>DemoUse : {count}</div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={handleRandom}>Random</button>
            <button onClick={handleReset}>Reset</button>
        </>

    )
}
