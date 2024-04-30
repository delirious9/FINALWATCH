import React from 'react'
import TextField from "@mui/material/TextField";
import List from "./Components/List"
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">Search for your favourite watches now</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                return (
                    <div className="main">
                      <h1>React Search</h1>
                      <div className="search">
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          fullWidth
                          label="Search"
                        />
                      </div>
                      <List />
                    </div>
                )
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
