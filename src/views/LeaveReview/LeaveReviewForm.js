import React from 'react';

export default class LeaveReviewForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div>
                    <label>Don't show my name</label>
                    <input
                        type="che"
                        name="rating"
                        min={1}
                        max={5}
                        value={this.props.rating}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div>
                    <label>Rating:</label>
                    <input
                        type="number"
                        name="rating"
                        min={1}
                        max={5}
                        value={this.props.rating}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div>
                    <label>Review:</label>
                    <textarea
                        name="content"
                        minLength={10}
                        value={this.props.content}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Submit"/>
            </form>
        );
    }
}