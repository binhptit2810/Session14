import { Component } from "react";
interface State {
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
}
export default class Exersice05 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            productCode: "",
            productName: "",
            price: 0,
            quantity: 0,
        };
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]: name === "price" || name === "quantity" ? Number(value) : value,
        });
    };
    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(this.state)
    };
    render() {
        return (
            <div style={{ width: "300px", margin: "20px auto", border: "2px solid black", textAlign: "left" }}>
                <h2>Thêm mới sản phẩm</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Mã sản phẩm</label>
                        <input
                            type="text"
                            name="productCode"
                            value={this.state.productCode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Tên sản phẩm</label>
                        <input
                            type="text"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Giá</label>
                        <input
                            type="number"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Số lượng</label>
                        <input
                            type="number"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        );
    }
}
