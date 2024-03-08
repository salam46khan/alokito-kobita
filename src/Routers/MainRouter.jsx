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
import AllPoem from "../Pages/AllPoem/AllPoem";
import UpdatePoem from "../Pages/Profile/UpdatePoem";
import ContactUs from "../Shared/ContactUs";

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
                element: <AllPoem></AllPoem>
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
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/poem/:id',
                element: <PrivateRouter><PoemDetails></PoemDetails></PrivateRouter>
            },
            {
                path: '/update/:id',
                element: <UpdatePoem></UpdatePoem>
            }
        ]
    }
])

export default MainRouter;