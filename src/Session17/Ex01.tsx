import { useState } from "react"

export default function Ex01() {
    const [name, setName] = useState<string>("Nguyễn Văn A")
    return (
        <div>Họ và Tên : {name}</div>
    )
}
