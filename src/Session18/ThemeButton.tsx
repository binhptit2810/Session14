import { useContext } from 'react'
import { ThemeContext } from './ThemeConteaxt'

export default function ThemeButton() {
    const theme = useContext(ThemeContext)
    console.log(theme);
    return (
        <div>ThemeButton</div>
    )
}
