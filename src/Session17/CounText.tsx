import React, { useState } from "react";

export default function CountText() {
    const [text, setText] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setText(e.target.value);
    };
    return (
        <div>
            <textarea
                value={text} onChange={handleChange} placeholder="Nhập nội dung..." />
            <div>Số ký tự: {text.length}</div>
        </div>
    );
}
