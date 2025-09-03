import { useState } from 'react'

export default function UserProfile() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }
    return (
        <div style={{ maxWidth: 400, margin: "50px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
            <h2>Thông tin người dùng</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nhập tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: 5,
                        border: "1px solid #ccc",
                        marginBottom: 10,
                    }}
                />
                <input
                    type="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: 5,
                        border: "1px solid #ccc",
                        marginBottom: 10,
                    }}
                />
                <button type="submit" style={{ padding: "8px 16px", background: "green", color: "#fff", border: "none", borderRadius: 5 }}>
                    Gửi
                </button>
            </form>
            {submitted && (
                <div style={{ marginTop: 20, padding: 10, background: "#e6ffe6", borderRadius: 5 }}>
                    <p><b>Tên:</b> {name}</p>
                    <p><b>Email:</b> {email}</p>
                </div>
            )}
        </div>
    )
}
