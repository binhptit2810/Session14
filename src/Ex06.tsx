import React, { Component } from "react";

interface State {
    gender: string;
    submittedGender: string;
}
export default class Ex06 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            gender: "",
            submittedGender: ""
        };
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ gender: e.target.value });
    }
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.setState({ submittedGender: this.state.gender });
    };
    render() {
        return (
            <div style={{ margin: "20px" }}>
                <form onSubmit={this.handleSubmit}>
                    <p>Chọn giới tính:</p>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Nam"
                            checked={this.state.gender === "Nam"}
                            onChange={this.handleChange}
                        />
                        Nam
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Nữ"
                            checked={this.state.gender === "Nữ"}
                            onChange={this.handleChange}
                        />
                        Nữ
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Khác"
                            checked={this.state.gender === "Khác"}
                            onChange={this.handleChange}
                        />
                        Khác
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                {this.state.submittedGender && (
                    <h3>Giới tính đã chọn: {this.state.submittedGender}</h3>
                )}
            </div>
        );
    }
}
