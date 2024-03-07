import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Shared/Error";
import About from "../Pages/About/About";
import Login from "../Pages/Registation/Login";
import Signup from "../Pages/Registation/Signup";
import Profile from "../Pages/Profile/Profile";
import PrivateRouter from "./PrivateRouter";
import PoemDetails from "../Components/PoemDetails";
import AddPoem from "../Pages/AddPoem/AddPoem";

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
                element: <p>all poem</p>
            },
            {
                path: '/add-poem',
                element: <PrivateRouter><AddPoem></AddPoem></PrivateRouter>
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
            },
            {
                path: '/my-fev',
                element: <p>hi</p>
            },
            {
                path: '/poem/:id',
                element: <PrivateRouter><PoemDetails></PoemDetails></PrivateRouter>
            }
        ]
    }
])

export default MainRouter;