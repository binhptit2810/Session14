import { Component } from "react";

interface State {
    name: string;
    email: string;
    age: string;
    error: string;
    submittedData: {
        name: string;
        email: string;
        age: string;
    } | null;
}

export default class UserForm extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: "",
            email: "",
            age: "",
            error: "",
            submittedData: null,
        };
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: value,
            error: "",
        });
    };
    handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { name, email, age } = this.state;
        if (!email.includes("@") || !email.includes(".")) {
            this.setState({ error: "Email không hợp lệ " });
            return;
        }
        if (parseInt(age) < 0) {
            this.setState({ error: "Tuổi ko đc âm " });
            return;
        }
        this.setState({
            submittedData: { name, email, age },
            name: "",
            email: "",
            age: "",
            error: "",
        });
    };
    handleReset = () => {
        this.setState({
            name: "",
            email: "",
            age: "",
            error: "",
            submittedData: null,
        });
    }
    render() {
        const { name, email, age, error, submittedData } = this.state;
        return (
            <div style={{ width: "400px", margin: "30px auto", textAlign: "center" }}>
                <h2>Nhập thông tin người dùng</h2>
                <form
                    onSubmit={this.handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Họ và tên"
                        onChange={this.handleChange}
                        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", backgroundColor: "hsl(179.63deg 100% 67.84%)" }}
                    />
                    <input
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", backgroundColor: "hsl(179.63deg 100% 67.84%)" }}
                    />
                    <input
                        type="number"
                        name="age"
                        value={age}
                        placeholder="Tuổi"
                        onChange={this.handleChange}
                        style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", backgroundColor: "hsl(179.63deg 100% 67.84%)" }}
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <button
                            type="submit"
                            style={{
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                backgroundColor: "#0d6efd",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            Gửi
                        </button>
                        <button
                            type="button"
                            onClick={this.handleReset}
                            style={{
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                backgroundColor: "#0d6efd",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            Xóa tất cả
                        </button>
                    </div>
                </form>

                {submittedData && (
                    <div
                        style={{
                            marginTop: "20px",
                            padding: "15px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            backgroundColor: "#f8f9fa",
                            textAlign: "center",
                        }}
                    >
                        <h3>Thông tin đã nhập:</h3>
                        <p>Họ tên: {submittedData.name}</p>
                        <p>Email: {submittedData.email}</p>
                        <p>Tuổi: {submittedData.age}</p>
                    </div>
                )}
            </div>
        );
    }
}
