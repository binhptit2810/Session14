import { Component } from "react";

export default class DetailPost extends Component {
    render() {
        const { id, title, content, author } = this.props;
        return (
            <div className="ListPost">
                <p><strong>Id:</strong> {id}</p>
                <p><strong>Title:</strong> {title}</p>
                <p><strong>Content:</strong> {content}</p>
                <p><strong>Author:</strong> {author}</p>
                <hr />
                <style>
                    {`
                        .ListPost {
                            margin-bottom: 15px;
                            padding: 5px;
                        }
                        .ListPost p {
                            margin: 3px 0;
                        }
                    `}
                </style>
            </div>
        );
    }
}
