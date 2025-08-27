import { useState } from "react";

export default function Toggle() {
    const [show, setShow] = useState<boolean>(false);
    const handleToggle = (): void => {
        setShow(!show);
    };

    return (
        <div>
            <button onClick={handleToggle}>
                {show ? "Ẩn" : "Hiện"}
            </button>
            {show && <div>Tiêu đề văn bản</div>}
        </div>
    );
}
