import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import QuickSell from "../pages/QuickSell";
import Login from "../Authentication/Login";
import CheckUser from "../Authentication/CheckUser";

const Routes= createBrowserRouter([
    {
        path:"/login",
        element:<Login></Login>
    },
    {   
        path:"/",
        element:<CheckUser>
            <Layout></Layout>
        </CheckUser>,
        children:[
            {
                path:"/",
                element:<QuickSell></QuickSell>
            },
            {
                path:"/quickSell",
                element:<QuickSell></QuickSell>
            }
        ]
    }
])

export default Routes;