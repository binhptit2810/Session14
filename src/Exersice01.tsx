import React, { Component } from 'react'
interface userName {
    name: string
}
export default class Exersice01 extends Component<{}, userName> {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: "Đặng Thanh Bình"
        }
    }
    render() {
        return (
            <div>{this.state.name}</div>
        )
    }
}
