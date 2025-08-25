import { Component, type ChangeEvent } from 'react'
interface State {
    color: string,
    submitted: string
}
export default class Ex02 extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            color: "",
            submitted: ""
        }
    }
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({
            ...this.state,
            [name]: name === "color" ? String(value) : value,
        });
    }
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.setState({ submitted: this.state.color })
    };
    render() {
        return (
            <>

                <form onSubmit={this.handleSubmit} >
                    <div >Color : {this.state.submitted} </div>
                    <input type="color" name="color" value={this.state.color} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
