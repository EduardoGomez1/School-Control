import React from "react";
import { Navigate, Outlet } from "react-router-dom";



const PrivateRoute = ({ component:Component, ...rest }) => {

    return(
        localStorage.getItem('user-info')? <Outlet/>:<Navigate to = "Login"/>
    );
};
export default PrivateRoute;