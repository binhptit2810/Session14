import React, { useEffect, useState } from "react";
interface Props {
    id: number;
    register: (id: number, listener: (isSelected: boolean) => void) => void;
    unregister: (id: number) => void;
    onSelect: () => void;
}
export default React.memo(function Item({ id, register, unregister, onSelect }: Props) {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        const listener = (isSelected: boolean) => {
            setSelected(isSelected);
        };
        register(id, listener);

        return () => {
            unregister(id);
        };
    }, [id])
    return (
        <tr>
            <td>{id}</td>
            <td>
                <button onClick={onSelect}>
                    {selected ? "Selected (highlight)" : "Select"}
                </button>
            </td>
        </tr>
    );
});
