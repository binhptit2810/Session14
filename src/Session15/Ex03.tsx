import React, { Component, type ChangeEvent, type FormEvent } from 'react'
interface State {
    date: string
    submitted: string
}
export default class Ex03 extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            date: "",
            submitted: ""
        }
    }
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        this.setState({
            ...this.state,
            [name]: name === "date" ? String(value) : value,
        });
    }
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.setState({ submitted: this.state.date })
    }
    render() {
        return (
            <>
                <form onClick={this.handleSubmit} >
                    <div>Ngày Sinh : {this.state.submitted}</div>
                    <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
