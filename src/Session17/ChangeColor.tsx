import { useState } from 'react'

export default function ChangeColor() {
  const [color, setColor] = useState<string>("black")
  const handleClick = (): void => {
    setColor(prev => prev === "black" ? "red" : "black")
  }
  return (
    <div>
      <div style={{ color: color }} >Tiêu đề văn bản</div>
      <button onClick={handleClick}>Thay đổi màu</button>
    </div>
  )
}
