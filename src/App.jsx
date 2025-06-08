import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Screens/Home.jsx";
import './assets/css/style.css';
import './assets/css/default.css';
import './assets/css/swiper-bundle.min.css';
import ProfesyonellerPage from "./Screens/ProfesyonellerPage.jsx";
import CompanyDetailPage from "./Screens/ProfesyonellerDetail.jsx";


function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        }, {
            path: "/profesyoneller",
            element: <ProfesyonellerPage/>,
        }, {
            path: "/profesyoneller/:id",
            element: <CompanyDetailPage/>,
        }
    ]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
