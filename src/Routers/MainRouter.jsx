import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element : <p>home</p>
            },
            {
                path: '/about',
                element: <p>About</p>
            }
        ]
    }
])

export default MainRouter;