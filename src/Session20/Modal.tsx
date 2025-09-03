import { useState, useRef, useEffect } from 'react'

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef(null)
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])
    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Ứng dụng React với Modal và Focus Input</h2>
            <button
                onClick={() => setIsOpen(true)}
                style={{ padding: "10px 20px", background: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
                Mở Modal
            </button>
            {isOpen && (
                <div style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "8px",
                        width: "300px",
                        textAlign: "center"
                    }}>
                        <h3>Đăng nhập</h3>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Nhập tên người dùng"
                            style={{ width: "100%", padding: "8px", marginBottom: "15px", border: "1px solid gray", borderRadius: "5px" }}
                        />
                        <br />
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ padding: "8px 16px", background: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
