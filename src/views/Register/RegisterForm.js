import React, {Component} from 'react';
import './RegisterForm.css'

export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <div className="form-group">
                    <div className="row"><label>Username: <div className="required">*</div></label></div>
                    <div className="row"><input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    /></div>
                </div>
                <div className="form-group">
                    <div className="row"><label>Password: <div className="required">*</div></label></div>
                    <div className="row"><input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    /></div>
                </div>
                <div className="form-group">
                    <div className="row"><label>Repeat Password: <div className="required">*</div></label></div>
                    <div className="row"><input
                        className="form-control"
                        type="password"
                        name="repeat"
                        value={this.props.repeat}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    /></div>
                </div>
                <div className="form-group">
                    <div className="row"><label>Email: <div className="required">*</div></label></div>
                    <div className="row"><input
                        className="form-control"
                        type="text"
                        name="email"
                        value={this.props.email}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    /></div>
                </div>
                <div className="form-group">
                    <div className="row"><label>Telephone:</label></div>
                    <div className="row"><input
                        className="form-control"
                        type="text"
                        name="telephone"
                        value={this.props.telephone}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    /></div>
                </div>
                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Register" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}