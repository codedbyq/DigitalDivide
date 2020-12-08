import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    handleSubmit() {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="text" id="email" onChange={this.handleInput('email')}/>
                    </label>
                    <label>
                        Password
                        <input type="password" id="password" onChange={this.handleInput('password')}/>
                    </label>
                    <input type="submit" value='Log In'/>
                </form>
            </div>
        )
    }
}

export default LoginForm;
