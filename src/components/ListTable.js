import React, { Component } from 'react';
import { Table } from "react-bulma-components";

export class ListTable extends Component {

    state = {
        datas: []
    }
    
    componentDidMount(){
        const entity = this.props.entity;
        this._fetchList({entity})
    }

    _fetchList = ({entity}) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Authorization", sessionStorage.getItem('token'));

        var requestOptions = {
            headers: myHeaders,
        };

        fetch(`http://localhost:4000/${entity}`, requestOptions)
            .then(response => response.text())
                .then(result => {
                    const res = JSON.parse(result);
                    if(res.ok === true){
                        console.log(res.users);
                        this.setState({datas: res.users})
                    }else{
                        console.log("No devuelve un ok");
                    }
                    
                })
            .catch(error => {
                console.log(error);
            })
    }

    render () {
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo electrónico</th>
                        <th>Permisos</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.datas.map(data => {
                        return (
                            <tr key={data._id}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.role}</td>
                                <td>{data.status ? "Activado" : "Desactivado"}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        )
    }
}