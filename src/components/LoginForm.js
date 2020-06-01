import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { authContext } from '../middlewares/Auth';

const LoginForm = () => {

    const { setAuthData } = useContext(authContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    let history = useHistory();

    const onFormSubmit = e => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:4000/login", requestOptions)
            .then(response => response.text())
                .then(result => {
                    const res = JSON.parse(result);
                    if(res.ok === true){
                        sessionStorage.setItem('token', res.token);
                        setAuthData(res.user.name);
                        history.push("/");
                    }else{
                        setError(true);
                    }
                    
                })
            .catch(error => {
                setError(true);
            })
    }
        return (
            <form onSubmit={onFormSubmit}>
                <div className="field">
                    <div className="control">
                        <input className="input is-large" type="email" placeholder="Correo electrónico" 
                        onChange={e => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    {error && <p className="help is-danger">El correo electrónico no es valido</p>}
                </div>

                <div className="field">
                    <div className="control">
                        <input className="input is-large" type="password" placeholder="Contraseña" onChange={e => {
                            setPassword(e.target.value);
                        }} />
                    </div>
                    {error && <p className="help is-danger">La cntraseña no es valida</p>}
                </div>
                <div className="field">
                    <label className="checkbox">
                        <input type="checkbox"/> Recuérdame
                    </label>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">Entrar <i className="fa fa-sign-in" aria-hidden="true"></i></button>
            </form>
        )
}

export default LoginForm;
