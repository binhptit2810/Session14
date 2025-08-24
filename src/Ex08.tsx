import { Component } from "react";

export default class Ex08 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: "",
            success: ""
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: "",
            success: ""
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ error: "Email và Mật khẩu không được để trống!" });
            return;
        }
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = savedUsers.find(
            (user) => user.email === email && user.password === password
        );
        if (foundUser) {
            this.setState({ success: "Đăng nhập thành công!", error: "" });
        } else {
            this.setState({ error: "Đăng nhập thất bại!", success: "" });
        }
    };
    render() {
        return (
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                <h2>Đăng nhập tài khoản</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Nhập Email"
                        />
                    </div>
                    <div>
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Nhập mật khẩu"
                        />
                    </div>
                    <button type="submit">Đăng nhập</button>
                </form>
                {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
                {this.state.success && <p style={{ color: "green" }}>{this.state.success}</p>}
            </div>
        );
    }
}
