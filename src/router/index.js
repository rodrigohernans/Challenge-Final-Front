import CardDetails from '../components/cardDetails/cardDetails'
import Home from './Home/Home'
import Layout from '../layouts/Layout'
import Store from './Store/Store'
import Presentation from '../components/presentation/Presentation'
import React from 'react'
import ShoppingCart from '../components/cart/Cart'
import SignIn from './Login/SignIn'
import SignUp from "./Login/SignUp"
import {createBrowserRouter} from "react-router-dom"
import Welcome from "../components/welcome/Welcome"
import AccountVerify from '../components/accountVerify/AccountVerify'

const indexRouter = createBrowserRouter([
    {
        path: '/',
        element: <Presentation />
    },
    {  path:"/verify/:verify_Code", element: <Welcome/> },
    {  path:"/verify", element: <AccountVerify/> },
    {
    
    path: '/',
    element:<Layout/>,
    children:[
        { path: "/home", element : <Home /> } ,
        { path: "/details", element : <CardDetails /> } ,
    { path: "/shopping-cart", element: <ShoppingCart/> },
        { path: "/store", element : <Store /> },
        { path: "/details/:id", element : <CardDetails /> } ,
            { path:"/signin",element:<SignIn/> },
    { path:"/signup",element:<SignUp/> } 
    ],
},

])

export default indexRouter 

