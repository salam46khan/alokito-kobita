import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <p>load</p>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.any
}
export default PrivateRouter;