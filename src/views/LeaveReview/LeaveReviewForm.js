import React from 'react';

export default class LeaveReviewForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        name="rating"
                        value={this.props.rating}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div>
                    <label>Review:</label>
                    <textarea
                        name="content"
                        value={this.props.content}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Submit"/>
            </form>
        );
    }
}