import { Component } from "react";

export default class Ex07 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            address: "",
            errors: "",
            success: ""
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            errors: "",
            success: ""
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, password, address } = this.state;

        if (!name || !email || !password) {
            this.setState({ errors: "Tên, Email và Mật khẩu không được để trống!" });
            return;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find((u) => u.email === email)) {
            this.setState({ errors: "Email đã tồn tại!" });
            return;
        }
        users.push({ name, email, password, address });
        localStorage.setItem("users", JSON.stringify(users));
        this.setState({
            name: "",
            email: "",
            password: "",
            address: "",
            errors: "",
            success: "Đăng ký tài khoản thành công!"
        });
    }
    render() {
        return (
            <div style={{ display: "flex", marginTop: "30px" }}>
                <form
                    onSubmit={this.handleSubmit}
                    style={{
                        padding: "20px",
                        borderRadius: "10px",
                        width: "300px"
                    }}
                >
                    <h3 style={{ textAlign: "center" }}>Đăng ký tài khoản</h3>



                    <div>
                        <label>Họ và tên</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập họ và tên"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Địa chỉ</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Nhập địa chỉ"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </div>
                    {this.state.errors && <p style={{ color: "red" }}>{this.state.errors}</p>}
                    {this.state.success && <p style={{ color: "green" }}>{this.state.success}</p>}
                    <button
                        type="submit"
                        style={{ marginTop: "10px", padding: "5px 10px" }}
                    >
                        Đăng ký
                    </button>
                </form>
            </div>
        );
    }
}
