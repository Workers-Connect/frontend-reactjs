import React, {useContext} from "react";
import { authContext } from "../middlewares/Auth";
import { Header } from '../components/Header';
import { ListTable } from '../components/ListTable';

const ListUsers = () => {
    const { auth } = useContext(authContext);

    return (
        <div
            className="d-flex justify-content-center align-items-center"
        >
            <Header user={auth.data}/>
            <div className="contcontainer is-fluidainer">
                <div className="notification">
                <h1 className="text-center">Listado de usuarios</h1>
                <ListTable entity="usuario" />
                </div>
            </div>
        </div>
    );
};

export default ListUsers;