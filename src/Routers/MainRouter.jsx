import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Error from "../Shared/Error";

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
                element: <p>About</p>
            },
            {
                path: '/all-poem',
                element: <p>All poems</p>
            },
            {
                path: '/add-poem',
                element: <p>Add Poem</p>
            }
        ]
    }
])

export default MainRouter;