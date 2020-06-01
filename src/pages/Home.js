import React, {useContext} from "react";
import { authContext } from "../middlewares/Auth";
import { Header } from '../components/Header';

const Home = () => {
  const { auth } = useContext(authContext);
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Header user={auth.data}/>
      <div className="contcontainer is-fluidainer">
        <div className="notification">
          <h1 className="text-center">Bienvenido a la intranet.</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;