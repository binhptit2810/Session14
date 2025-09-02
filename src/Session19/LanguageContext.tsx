import { createContext, useState, useContext } from "react"
type Language = "en" | "vi"
interface LanguageContextType {
    language: Language;
    changeLanguage: (lang: Language) => void
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
export function Language() {
    const [language, setLanguage] = useState<Language>("en");
    const changeLanguage = (lang: Language) => {
        setLanguage(lang);
    }
    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            <div>
                <span>Ngôn ngữ hiện tại: </span>
                <select value={language} onChange={(e) => changeLanguage(e.target.value as Language)}>
                    <option value="en">English</option>
                    <option value="vi">Tiếng Việt</option>
                </select>
                <Greeting />
            </div>
        </LanguageContext.Provider>
    )
}
function Greeting() {
    const context = useContext(LanguageContext);
    if (!context) return null;
    const { language } = context;
    return <h1>{language === "en" ? "Welcome!" : "Xin chào!"}</h1>;
}
