import React, { useState } from "react";

export default function Select() {
    const [city, setCity] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setCity(e.target.value);
    };
    return (
        <div>
            <label htmlFor="city">Thành phố: </label>
            <select id="city" value={city} onChange={handleChange}>
                <option value="">-- Chọn thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Thái Bình</option>
                <option value="Ninh Bình">Hưng Yên</option>

            </select>
            {city && <div>Thành phố: {city}</div>}
        </div>
    );
}
