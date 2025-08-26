import { Component } from "react";

interface State {
    subjects: string[];
}

export default class SubjectList extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            subjects: ["Toán", "Văn", "Anh", "Hóa", "Sinh"]
        };
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: "#1e1e1e",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "300px",
                    textAlign: "center",
                    margin: "auto"
                }}
            >
                <h2 style={{ color: "white", marginBottom: "20px" }}> Danh sách môn học</h2>
                {this.state.subjects.map((subject) => (
                    <div

                        style={{
                            backgroundColor: "#e0f7fa",
                            margin: "10px 0",
                            padding: "10px",
                            borderRadius: "10px",
                            fontSize: "18px",
                            fontWeight: "bold"
                        }}
                    >
                        {subject}
                    </div>
                ))}
            </div>
        );
    }
}
