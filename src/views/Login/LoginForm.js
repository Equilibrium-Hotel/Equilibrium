import React from 'react';
import '../../styles/LoginForm.css';

export default class LoginForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                <div className="form-group" >
                    <div><label>Username:</label></div>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Login" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}