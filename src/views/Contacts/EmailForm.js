import React from 'react';
import { post } from '../../utils/Requester';
import { Notifier } from '../../utils/Notifier';

export default class EmailForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            content: '',
            errorMessage: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        let email = this.state.email;
        let subject = this.state.subject;
        let content = this.state.content;
        let emailReg = /^[^@]+@[^@]+\.[^@]+$/;
        if (!content || content.length < 10 || !emailReg.test(email)) {
            this.setState({
                errorMessage: 'Email should be valid and content should be at least 10 characters!'
            });
            return;
        }else {
            this.setState({
                errorMessage: ''
            })
        }

        let data ={email:email, subject:subject, content:content};
        post('appdata', 'Emails', data, 'kinvey');
        Notifier.success('Email send', 'Success');
        this.context.router.push('/contacts');
    }

    closeForm() {
        this.context.router.push('/contacts');
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="email-form-wrapper">
                <div className="close-email" onClick={this.closeForm}></div>
                <div className="row form-group">
                    <label className="col-xs-4 col-sm-3">Your email:</label>
                    <input
                        className="col-sm-4"
                        type="email"
                        name="email"


                        value={this.state.email}
                        onChange={this.onChangeHandler}
                    />
                </div>

                <div className="row form-group">
                    <label className="col-xs-4 col-sm-3">Subject:</label>
                    <input
                        className="col-sm-4"
                        type="text"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div className="row form-group">
                    <label className="col-xs-4 col-sm-3">Content:</label>
                    <textarea
                        rows="5"
                        className="col-sm-4"
                        name="content"
                        value={this.state.content}
                        onChange={this.onChangeHandler}
                    />
                </div>
                <div className="row form-group">
                    <input className="btn btn-primary" type="submit" value="Send email"/>
                </div>
                {this.state.errorMessage && <div className="error-message">{this.state.errorMessage}</div>}
            </form>
        );
    }
}

EmailForm.contextTypes = {
    router: React.PropTypes.object
};