import { Component } from 'react'

interface State {
    company: string
}
export default class React extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            company: "Rikkei Academy"
        }
    }
    changeState = () => {
        this.setState({
            company: "RikkeiSoft"
        })
    }

    render() {
        return (
            <div>
                <h1>Company: {this.state.company}</h1>
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}
