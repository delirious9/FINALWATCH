import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import ForgetPasswordPage from './Pages/ForgetPasswordPage'
import HomePage from './Pages/HomePage'
import WatchList from './Pages/WatchList'
import MyPortfolio from './Pages/MyPortfolio'


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/watch-list" component={ WatchList } />
                    <Route path="/my-portfolio" component={ MyPortfolio } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by Toghrul Mammadli</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}