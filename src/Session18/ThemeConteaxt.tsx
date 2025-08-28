import { createContext } from "react";

type Theme = "light" | "dark"
interface ThemeContextType {
    theme: Theme
}
export const ThemeContext = createContext<ThemeContextType>({ theme: "light" })