import React, { useState } from "react";
export default function Form() {
    const [value, setValue] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Nhập nội dung"
                value={value}
                onChange={handleChange}
            />
            <div>{value}</div>
        </div>
    );
}
