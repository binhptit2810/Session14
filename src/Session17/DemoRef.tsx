import React, { useRef } from 'react'

export default function DemoRef() {
    const myRef = useRef(null)
    const renderRef = useRef(0)
    renderRef.current++
    return (
        <div>
            <div ref={myRef}>Đây là thẻ dùng ref</div>
        </div>
    )
}
