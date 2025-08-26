import { Component } from "react";

interface Props {
    name: string;
    price: number;
    image: string;
}

export default class ProductCard extends Component<Props> {
    render() {
        const { name, price, image } = this.props;

        return (
            <div
                style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "10px",
                    textAlign: "center",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
            >
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "6px",
                    }}
                />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{name}</h3>
                <p style={{ color: "green", fontWeight: "bold" }}>{price} VND</p>
                <button
                    style={{
                        marginTop: "10px",
                        background: "#007bff",
                        border: "none",
                        color: "white",
                        padding: "6px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Thêm vào giỏ hàng
                </button>
            </div>
        );
    }
}
