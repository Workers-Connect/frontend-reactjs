import React, { Component } from 'react';
import { Navbar } from "react-bulma-components";

export class Header extends Component {
    state = { active : false }

    handleClick = () => { 
        const { active } = this.state;
        this.setState({ active: !active }); 
    }

    handleLogout = () => {
        sessionStorage.setItem('token', null);
        sessionStorage.setItem('authData', null);
        window.location.reload();
    }    

    render () {
        return(
            <div id="header">
                <Navbar color="info" fixed="top" active={this.state.active}>
                    <Navbar.Brand>
                        <Navbar.Item href="/">Home</Navbar.Item>
                        <Navbar.Burger
                            active={this.state.active.toString()}
                            onClick={this.handleClick}
                        />
                    </Navbar.Brand>
                    <Navbar.Menu>
                        <Navbar.Container>
                            <Navbar.Item href="/list-users"> Usuarios</Navbar.Item>
                        </Navbar.Container>
                        <Navbar.Container position="end">
                            <Navbar.Item>{`Hello, ${this.props.user}`}</Navbar.Item>
                            <Navbar.Item onClick={this.handleLogout}> Cerrar Sesión </Navbar.Item>
                        </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
            </div>
        )
    }
}