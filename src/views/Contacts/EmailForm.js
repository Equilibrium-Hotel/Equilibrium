import React from 'react';

export default class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            content: ''
        }
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        console.dir(this.state)
        //TODO : send email
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="review-form">
                <div className="row">
                    <label className="col-xs-4 col-sm-3">Your email:</label>
                    <input
                        className="col-sm-4"
                        type="text"
                        name="email"
                        value={this.state.email}
                    />
                </div>

                <div className="row">
                    <label className="col-xs-4 col-sm-3">Subject:</label>
                    <input
                        className="col-sm-4"
                        type="text"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div className="row">
                    <label className="col-xs-4 col-sm-3">Content:</label>
                    <textarea
                        className="col-sm-4"
                        name="content"
                        value={this.state.content}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div className="row">
                    <input className="btn btn-primary col-xs-offset-2" type="submit" value="Send email"/>
                </div>
            </form>
        );
    }
}