import { useState } from 'react'

export default function CheckString() {
    const [text, setText] = useState("")

    return (
        <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
            <h1>Kiểm tra độ dài chuỗi nhập vào</h1>
            <input
                type="text"
                placeholder="Nhập vào đây"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: 5,
                    border: "1px solid #ccc",
                    marginBottom: 10,
                }}
            />
            {text.length > 5 && (
                <p style={{ color: "red", background: "#ffe6e6", padding: "8px", borderRadius: 5 }}>
                    Chuỗi nhập vào dài hơn 5 ký tự!
                </p>
            )}
        </div>
    )
}
