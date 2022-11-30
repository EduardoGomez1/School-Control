import React from "react";
import { Navigate, Outlet } from "react-router-dom";



const PrivateRoute = ({ component:Component, ...rest }) => {

    return(
        localStorage.getItem('user-info')? <Outlet/>:<Navigate to = "Login"/>
    );
};
export default PrivateRoute;

// import React from "react";
// import { Route, useNavigate } from "react-router-dom";



// const PrivateRoute = ({ component:Component, ...rest }) => {
// const navigateTo = useNavigate();
//     return(
//         <Route {...rest}>{localStorage.getItem('user-info')? <Component/>:navigateTo('/login') }</Route >
//     );
// };
// export default PrivateRoute;
