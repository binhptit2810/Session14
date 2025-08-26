import { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <div
                style={{
                    background: "orange",
                    padding: "10px",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "left",
                    fontSize: "20px",
                    borderRadius: "6px",
                    display: "flex",
                    gap: 30
                }}
            >
                <div>Trang chủ</div>
                <div>Danh sách sản phẩm</div>
            </div>
        );
    }
}
