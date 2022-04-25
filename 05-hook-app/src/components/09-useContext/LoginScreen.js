import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  // Obtener referencia al context
  const { setUser } = useContext(UserContext);
  // extraer setUser
  const userLogged = {
      id: 1234,
      name: 'leyder'
  }
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={()=> setUser(userLogged)}>Login</button>
    </div>
  );
};
