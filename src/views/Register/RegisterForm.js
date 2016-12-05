import React, {Component} from 'react';
import './RegisterForm.css'

export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Username: <div className="required">*</div></label>
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
                    <label>Password: <div className="required">*</div></label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Repeat Password: <div className="required">*</div></label>
                    <input
                        className="form-control"
                        type="password"
                        name="repeat"
                        value={this.props.repeat}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Email: <div className="required">*</div></label>
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        value={this.props.email}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Telephone:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="telephone"
                        value={this.props.telephone}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-lg btn-primary btn-block" type="submit" value="Register" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}