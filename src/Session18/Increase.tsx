import { useReducer } from "react"

type ActionTypes = {
    type: "increase"
}
const initialState = 0
const reducer = (state: number, action: ActionTypes) => {
    switch (action.type) {
        case "increase":
            return (state += 1)
        default:
            return state
    }
}

export default function Increase() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const handleIncrease = (): void => {
        dispatch({ type: "increase" })
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}
