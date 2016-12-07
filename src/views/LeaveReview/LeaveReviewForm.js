import React from 'react';

export default class LeaveReviewForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="review-form col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <div className="row">
                    <label className="col-sm-12">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={sessionStorage.getItem('username')}
                        disabled="disabled"/>
                </div>
                <div className="row">
                    <label>Don't show my name</label>
                    <input
                        id="checkbox"
                        type="checkbox"
                        value="invisibleName"
                        onChange={this.props.onCheckBoxChecked}/>

                </div>
                <div className="row">
                    <label className="col-sm-12">Rating:</label>
                    <input
                        defaultValue={5}
                        type="number"
                        name="rating"
                        min={1}
                        max={5}
                        value={this.props.rating}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="row">
                    <label className="col-sm-12">Review:</label>
                    <textarea
                        rows="4"
                        name="content"
                        value={this.props.content}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-block" type="submit" value="Submit"/>
                {this.props.errorMessage && <div className="error-message">{this.props.errorMessage}</div>}
            </form>
        );
    }
}