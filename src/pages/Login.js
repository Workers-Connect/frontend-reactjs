import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import '../assets/css/Login.css';

export class Login extends Component {
    
    render () {
        return(
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-black">Acceso</h3>
                            <hr className="login-hr"/>
                            <p className="subtitle has-text-black">Accede con tus credenciales</p>
                            <div className="box">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}