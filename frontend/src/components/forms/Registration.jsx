import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../../actions";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        };
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.register(this.state.username, this.state.password);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>
        }
        return (
            <div className={'form'}>
                <form onSubmit={this.onSubmit} className={'dynamic-form '}>
                    <fieldset>
                        <legend className={'title'}>Register</legend>
                        {this.props.errors.length > 0 && (
                            <ul>
                                {this.props.errors.map(error => (
                                    <li key={error.field}>{error.message}</li>
                                ))}
                            </ul>
                        )}
                        <p className={'group'}>
                            <label className={'label'} htmlFor="username">Username</label>
                            <input
                                className={'input'}
                                type="text" id="username"
                                onChange={e => this.setState({username: e.target.value})}/>
                        </p>
                        <p className={'group'}>
                            <label className={'label'} htmlFor="password">Password</label>
                            <input
                                className={'input'}
                                type="password" id="password"
                                onChange={e => this.setState({password: e.target.value})}/>
                        </p>
                        <p>
                            <button className={'btn btn-secondary'} type="submit">Register</button>
                        </p>

                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let errors = [];
    let removeErrors = false
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            if (state.auth.errors[field] !== "Authentication credentials were not provided.") {
                return {field, message: state.auth.errors[field]};
            } else {
                removeErrors = true
                return {}
            }
        });
    }
    if (removeErrors === true) {
        errors = []
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        register: (username, password) => dispatch(auth.register(username, password)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);