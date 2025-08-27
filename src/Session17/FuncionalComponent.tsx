import { useState } from "react"
type User = {
    email?: string
    password?: string
    address?: string


}
export default function FuncionalComponent() {
    const [email, setEmail] = useState<string>("binh2810@gmail.com")
    const [password, setPassword] = useState<string>("123456")
    const [address, setAddress] = useState<string>("Thai binh")
    const [count, setCount] = useState(0)
    const [user, setUser] = useState<User | null>(null)
    const handleIncrease = (): void => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 2)
        setCount((prev) => prev + 3)

    }
    //cập nhật giá trị của state
    return (
        <div>
            <h2>Email {email}</h2>
            <h2>Address {address}</h2>
            <h2>Password : {password}</h2>
            <h2>Count {count}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}
