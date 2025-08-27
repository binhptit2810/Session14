import { useState } from "react";

export default function Checkbox() {
    const [soThich, setSoThich] = useState<string[]>([]);
    const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
    const handleChange = (value: string) => {
        if (soThich.includes(value)) {
            setSoThich(soThich.filter((item) => item !== value));
        } else {
            setSoThich([...soThich, value]);
        }
    };
    return (
        <div >
            <p>Sở thích: {JSON.stringify(soThich)}</p>
            {options.map((item, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="checkbox"
                            checked={soThich.includes(item)}
                            onChange={() => handleChange(item)}
                        />
                        {item}
                    </label>
                </div>
            ))}
        </div>
    );
}
