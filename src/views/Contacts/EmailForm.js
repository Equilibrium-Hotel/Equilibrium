import React from 'react';

export default class EmailForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="review-form">
                <div className="row">
                    <label className="col-sm-3">Your email:</label>
                    <input
                        className="col-sm-4"
                        type="text"
                        name="email"
                        value={this.props.email}
                    />
                </div>

                <div className="row">
                    <label className="col-sm-3">Subject:</label>
                    <input
                        className="col-sm-4"
                        type="text"
                        name="subject"
                        value={this.props.subject}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="row">
                    <label className="col-sm-3">Content:</label>
                    <textarea
                        className="col-sm-4"
                        name="content"
                        value={this.props.content}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-primary" type="submit" value="Send email"/>
            </form>
        );
    }
}