import { useEffect } from 'react'

export default function Welcome() {
    useEffect(() => {
        console.log("Component đã được render lần đầu!")
    }, [])

    return (
        <div style={{
            textAlign: "center",
            marginTop: "50px",
            fontSize: "24px",
            fontWeight: "bold",
            border: "1px solid black",
            padding: "10px"
        }}>
            Chào mừng bạn đến với ứng dụng của chúng tôi!
        </div>
    )
}
