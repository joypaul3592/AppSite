import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error404 from "../pages/Error404/Error404";
import AdMoney from "../pages/Home/AdMoney/AdMoney";
import CashOut from "../pages/Home/Cashout/Cashout";
import Fraxload from "../pages/Home/Fraxiload/Fraxiload";
import Home from "../pages/Home/Home";
import SpecialOffer from "../pages/Home/SpecialOffer/SpecialOffer";
import TransactionHistory from "../pages/Home/TransactionHistory/TransactionHistory";
import TransferMoney from "../pages/Home/TransferMoney/TransferMoney";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/adMoney',
                element: <AdMoney/>,
            },
            {
                path: '/cashOut',
                element: <CashOut/>,
            },
            {
                path: '/fraxload',
                element: <Fraxload/>,
            },
            {
                path: '/specialOffer',
                element: <SpecialOffer/>,
            },
            {
                path: '/transactionHistory',
                element: <TransactionHistory/>,
            },
            {
                path: '/transferMoney',
                element: <TransferMoney/>,
            },
            {
                path: '*',
                element: <Error404/>,
            },
        ]
    }
])