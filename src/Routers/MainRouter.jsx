import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Shared/Error";
import About from "../Pages/About/About";
import Login from "../Pages/Registation/Login";
import Signup from "../Pages/Registation/Signup";
import Profile from "../Pages/Profile/Profile";
import PrivateRouter from "./PrivateRouter";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element : <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/all-poem',
                element: <p>All poems</p>
            },
            {
                path: '/add-poem',
                element: <PrivateRouter><p>add poem</p></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter> 
            }
        ]
    }
])

export default MainRouter;