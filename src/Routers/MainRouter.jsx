import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Shared/Error";
import About from "../Pages/About/About";
import Login from "../Pages/Registation/Login";
import Signup from "../Pages/Registation/Signup";

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
                element: <p>Add Poem</p>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default MainRouter;