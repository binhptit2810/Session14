import React, { useEffect } from 'react'

export default function DemoEffect() {
    useEffect(() => {
        console.log("Effect được chạy ")
        return () => {
            console.log("Component được gỡ");

        }
    })
    return (
        <div>DemoEffect</div>
    )
}
