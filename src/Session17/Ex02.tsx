import { useState } from "react"

type Product = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

export default function Ex02() {
    const [products, setProducts] = useState<Product>({
        id: 1,
        name: "coca cola",
        price: 1000,
        quantity: 10

    })
    return (
        <>
            <h1>Thông tin sản phẩm</h1>
            <div>id : {products.id}</div>
            <div>name : {products.name}</div>
            <div>Price : {products.price}</div>
            <div>quantity : {products.quantity}</div>
        </>
    )
}
