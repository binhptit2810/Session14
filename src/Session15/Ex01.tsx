import { Component } from 'react'
interface State {
    email: string
}
export default class Ex01 extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            email: ""
        }
    }
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            [name]: name === "email" ? String(value) : value,
        });
    };
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(this.state)
    };
    render() {
        return (
            <>
                <div>Form</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="Email" name="email" value={this.state.name} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
