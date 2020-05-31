import React, {useContext} from "react";
import { authContext } from "../middlewares/Auth";


const Home = () => {
  const { auth } = useContext(authContext);
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 300 }}>
        <h1 className="text-center"> {`Hello, ${auth.data}`} </h1>
      </div>
    </div>
  );
};

export default Home;