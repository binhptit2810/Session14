import { Component, type ChangeEvent, type FormEvent } from 'react'
interface State {
    progress: string
    submitted: string
}
export default class Ex04 extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            progress: "",
            submitted: ""
        }
    }
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        this.setState({
            ...this.state,
            [name]: name === "progress" ? String(value) : value,
        });
    }
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.setState({ submitted: this.state.progress })
    }
    render() {
        return (
            <>
                <form onClick={this.handleSubmit} >
                    <div>Tiến độ hoàn thành : {this.state.submitted} %</div>
                    <input type="range" name="progress" value={this.state.progress} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
