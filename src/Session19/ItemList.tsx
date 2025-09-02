import { useRef } from "react";
import Item from "./Item";
export default function ItemList() {
    const listenersRef = useRef<Map<number, (isSelected: boolean) => void>>(
        new Map()
    )
    const selectedRef = useRef<number | null>(null);
    const register = (id: number, listener: (isSelected: boolean) => void) => {
        listenersRef.current.set(id, listener);
    }
    const unregister = (id: number) => {
        listenersRef.current.delete(id);
    }
    const changeSelection = (id: number) => {
        const prev = selectedRef.current;
        if (prev === id) {
            const check = listenersRef.current.get(id);
            if (check) check(false);
            selectedRef.current = null;
            return;
        }
        if (prev !== null) {
            const prevListener = listenersRef.current.get(prev);
            if (prevListener) prevListener(false);
        }
        const curListener = listenersRef.current.get(id);
        if (curListener) curListener(true);

        selectedRef.current = id;
    };
    const rows = [];
    for (let i = 1; i <= 100; i++) {
        rows.push(
            <Item
                key={i}
                id={i}
                register={register}
                unregister={unregister}
                onSelect={() => changeSelection(i)}
            />
        );
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
