import { Component } from "react";

interface State {
    isLoggedIn: boolean;
}
export default class LoginStatus extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }
    toggleLogin = () => {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn
        }));
    };

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#f0f8ff",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "300px",
                    textAlign: "center",
                    margin: "20px auto"
                }}
            >
                <h3 style={{ marginBottom: "15px" }}>
                    {this.state.isLoggedIn ? " Xin chào, User!" : "Vui lòng đăng nhập để tiếp tục."}
                </h3>

                <button
                    onClick={this.toggleLogin}
                    style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    {this.state.isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
                </button>
            </div>
        );
    }
}
