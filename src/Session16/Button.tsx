import { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: "#2c2c2c",
                    padding: "15px",
                    borderRadius: "8px",
                }}
            >
                <button style={{ background: "#0d6efd", color: "#fff", padding: "10px 18px", margin: "5px", border: "none", borderRadius: "6px" }}>Primary</button>
                <button style={{ background: "#6c757d", color: "#fff", padding: "10px 18px", margin: "5px", border: "none", borderRadius: "6px" }}>Secondary</button>
                <button style={{ background: "#198754", color: "#fff", padding: "10px 18px", margin: "5px", border: "none", borderRadius: "6px" }}>Success</button>
                <button style={{ background: "#ffc107", color: "#000", padding: "10px 18px", margin: "5px", border: "none", borderRadius: "6px" }}>Warning</button>
                <button style={{ background: "#dc3545", color: "#fff", padding: "10px 18px", margin: "5px", border: "none", borderRadius: "6px" }}>Danger</button>
                <button style={{ background: "#0dcaf0", color: "#000", padding: "10px 18px", margin: "5px", border: "none", borderRadius: "6px" }}>Info</button>
                <button style={{ background: "#f8f9fa", color: "#000", padding: "10px 18px", margin: "5px", border: "1px solid #ddd", borderRadius: "6px" }}>Light</button>
                <button style={{ background: "#212529", color: "#fff", padding: "10px 18px", margin: "5px", border: "none", borderRadius: "6px" }}>Dark</button>
                <button style={{ background: "none", color: "#0d6efd", padding: "10px 12px", margin: "5px", border: "none", }}>Link</button>
            </div>
        );
    }
}
