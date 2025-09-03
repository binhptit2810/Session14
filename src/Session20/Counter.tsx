import { useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case 'incrase':
            return { count: state.count + 1 }
        case 'decrease':
            return { count: state.count - 1 }
        default:
            return state
    }
}
export default function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div >
            <h1 >Số đếm: {state.count}</h1>
            <button
                onClick={() => dispatch({ type: 'incrase' })}
            >
                Tăng
            </button>
            <button
                onClick={() => dispatch({ type: 'decrease' })}
            >
                Giảm
            </button>
        </div>
    )
}
