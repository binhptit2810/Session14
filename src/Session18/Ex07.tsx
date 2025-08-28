import { useReducer, useEffect, useState } from "react";
type Todo = string
type ActionTypes = { type: "addTodo"; payload: string }
const initialState: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
const reducer = (state: Todo[], action: ActionTypes): Todo[] => {
    switch (action.type) {
        case "addTodo":
            return [...state, action.payload]
        default:
            return state
    }
}
export default function Ex07() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState("");
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state));
    }, [state]);
    const handleAdd = (): void => {
        if (input === "") return
        dispatch({ type: "addTodo", payload: input });
        setInput("");
    }


    return (
        <div style={{ width: "400px", margin: "50px auto" }}>
            <input
                type="text"
                placeholder="Nhập tên công việc"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
            />
            <button
                onClick={handleAdd}
                style={{
                    marginTop: "10px",
                    padding: "10px 15px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                }}
            >
                Thêm
            </button>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {state.map((todo, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "10px",
                            border: "1px solid #ddd",
                            marginTop: "5px",
                            borderRadius: "5px",
                        }}
                    >
                        <span>{todo}</span>
                        <button
                            style={{
                                background: "red",
                                color: "white",
                                border: "none",
                                padding: "5px 10px",
                                borderRadius: "5px",
                            }}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
