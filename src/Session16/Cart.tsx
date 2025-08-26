import { Component } from "react";

export default class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div className="cart-head">Cart</div>

                <div className="cart-item">
                    <img className="cart-thumb" src="https://picsum.photos/seed/c1/44/44" alt="" />
                    <div className="cart-info">
                        <div className="cart-name">Dien thoai Samsung Galaxy</div>
                        <div className="cart-ctrl">
                            <button className="mini">-</button>
                            <span className="qty">1</span>
                            <button className="mini">+</button>
                            <button className="mini danger">x</button>
                        </div>
                    </div>
                </div>

                <div className="cart-item">
                    <img className="cart-thumb" src="https://picsum.photos/seed/c2/44/44" alt="" />
                    <div className="cart-info">
                        <div className="cart-name">Dien thoai iPhone14 Promax</div>
                        <div className="cart-ctrl">
                            <button className="mini">-</button>
                            <span className="qty">1</span>
                            <button className="mini">+</button>
                            <button className="mini danger">x</button>
                        </div>
                    </div>
                </div>

                <div className="cart-item">
                    <img className="cart-thumb" src="https://picsum.photos/seed/c3/44/44" alt="" />
                    <div className="cart-info">
                        <div className="cart-name">Dien thoai Samsung Galaxy</div>
                        <div className="cart-ctrl">
                            <button className="mini">-</button>
                            <span className="qty">1</span>
                            <button className="mini">+</button>
                            <button className="mini danger">x</button>
                        </div>
                    </div>
                </div>

                <div className="cart-total">
                    Tong tien: <b>61.500.000 đ</b>
                </div>
            </div>
        );
    }
}
