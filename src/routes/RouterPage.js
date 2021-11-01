import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SingUpPage from "../pages/SingUpPage/SingUpPage"
import AdressPage from "../pages/AdressPage/AdressPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import CartPage from "../pages/CartPage/CartPage"
import InitialPage from "../pages/InitialPage/InitialPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const RouterPage = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/tela-inicial" component ={() => <HomePage />}/>
            <Route exact path="/" component ={() => <InitialPage />}/>
            <Route exact path="/login" component ={() => <LoginPage />}/>
            <Route exact path="/cadastro" component ={() => <SingUpPage />}/>
            <Route exact path="/endereco" component ={() => <AdressPage />}/>
            <Route exact path="/perfil/:id" component ={() => <ProfilePage />}/>
            <Route exact path="/restaurante/:id" component ={() => <RestaurantPage />}/>
            <Route exact path="/carrinho" component ={() => <CartPage />}/>
            <Route  path="*" component ={() => <ErrorPage />}/>
        </Switch>
        </BrowserRouter>
    )
}

export default RouterPage