import { Component } from "react";
interface State {
    isDarkMode: boolean;
    themeStyle: {
        backgroundColor: string;
        color: string;
        minHeight: string;
        padding: string;
        textAlign: string;
    };
}

export default class ThemeSwitcher extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            isDarkMode: false,
            themeStyle: {
                backgroundColor: "#fff",
                color: "#000",
                minHeight: "200px",
                padding: "20px",
                textAlign: "center"
            }
        };
    }
    toggleTheme = () => {
        this.setState((prevState) => {
            const isDark = !prevState.isDarkMode;
            return {
                isDarkMode: isDark,
                themeStyle: {
                    backgroundColor: isDark ? "#222" : "#fff",
                    color: isDark ? "#fff" : "#000",
                    minHeight: "200px",
                    padding: "20px",
                    textAlign: "center"
                }
            };
        });
    };
    render() {
        return (
            <div style={this.state.themeStyle}>
                <h2>
                    {this.state.isDarkMode
                        ? "Chế độ tối đang bật"
                        : "Chế độ sáng đang bật"}
                </h2>
                <button
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        border: "1px solid #007bff",
                        borderRadius: "5px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                    }}
                    onClick={this.toggleTheme}
                >
                    Chuyển Theme
                </button>
            </div>
        );
    }
}
