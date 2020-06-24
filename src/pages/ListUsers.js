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
            <section class="section">
                <div class="container">
                    <h1>Listado de usuarios</h1>
                    <ListTable entity="usuario" />
                </div>
            </section>
        </div>
    );
};

export default ListUsers;