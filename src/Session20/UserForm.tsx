import React, { useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case 'setName':
            return { ...state, name: action.payload }
        case 'setEmail':
            return { ...state, email: action.payload }
        default:
            return state
    }
}
export default function UserForm() {
    const [state, dispatch] = useReducer(reducer, { name: '', email: '' })
    return (
        <div style={{ maxWidth: "400px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0,0,0,0.1)" }}>
            <h2 style={{ textAlign: "center" }}>User Information Form</h2>
            <div style={{ marginBottom: "15px" }}>
                <label>Tên:</label>
                <input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
                    style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label>Email:</label>
                <input
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: 'setEmail', payload: e.target.value })}
                    style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
            </div>
            <div style={{ background: "#f7f7f7", padding: "10px", borderRadius: "5px" }}>
                <h4>Thông tin người dùng:</h4>
                <p><b>Tên:</b> {state.name}</p>
                <p><b>Email:</b> {state.email}</p>
            </div>
        </div>
    )
}
