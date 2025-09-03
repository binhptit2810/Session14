import { useState, useEffect } from 'react'

export default function Timer() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Timer bắt đầu chạy")
        const interval = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
            console.log("Timer đã được dừng")
        }
    }, [])
    return (
        <div style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "22px",
            fontWeight: "bold"
        }}>
            Thời gian: {count} giây
        </div>
    )
}
