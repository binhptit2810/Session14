import { Component } from 'react'
interface State {
    slogan: string
}
export default class Exersice04 extends Component<{}, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            slogan: "Học code để đi làm"
        }
    }
    changeState = () => {
        this.setState({
            slogan: "học code sẽ thành công cố lên!!!"
        })
    }

    render() {
        return (
            <div>
                <h1>Slogan: "{this.state.slogan}"</h1>
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}
