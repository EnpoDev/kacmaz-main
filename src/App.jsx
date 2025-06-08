import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Screens/Home.jsx";
import './assets/css/style.css';
import './assets/css/default.css';
import './assets/css/swiper-bundle.min.css';


function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
