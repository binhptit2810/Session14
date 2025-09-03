import { useState, useEffect } from 'react'

export default function PageTitle() {
    const [name, setTen] = useState("")
    useEffect(() => {
        if (name) {
            document.title = `Chào, ${name}!`
        } else {
            document.title = "Chào mừng đến với trang của chúng tôi!"
        }
    }, [name])

    return (
        <div style={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "18px",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
            <input
                type="text"
                placeholder="Nhập tên của bạn"
                value={name}
                onChange={(e) => setTen(e.target.value)}
                style={{ padding: "8px", width: "90%", marginTop: "10px" }}
            />
            <p style={{ marginTop: "10px" }}>
                Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên.
            </p>
        </div>
    )
}
