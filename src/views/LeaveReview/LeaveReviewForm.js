import React from 'react';

export default class LeaveReviewForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="review-form">
                <div className="row">
                    <label className="col-sm-3">Name:</label>
                    <input
                        className="col-sm-4"
                        type="text"
                        name="name"
                        value={sessionStorage.getItem('username')}
                        disabled="disabled"/>
                </div>
                <div  className="row">
                    <label className="col-sm-3">Don't show my name</label>
                    <input
                        type="checkbox"
                        value="invisibleName"
                        onChange={this.props.onCheckBoxChecked}/>

                </div>
                <div className="row">
                    <label className="col-sm-3">Rating:</label>
                    <input
                        className="col-sm-4"
                        type="number"
                        name="rating"
                        min={1}
                        max={5}
                        value={this.props.rating}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="row">
                    <label className="col-sm-3">Review:</label>
                    <textarea
                        className="col-sm-4"
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