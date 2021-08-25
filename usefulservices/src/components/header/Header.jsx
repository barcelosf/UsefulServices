import React from "react"
import "./Header.css"

import Logo from "../../assets/img/Logo.png"

export default function(props){
    return(
        <header>
            <figure>
                <img src={Logo} alt="logo" width = "100px" height = "100px"/>
                <figcaption>Useful Services</figcaption>
            </figure>
            <nav>
                <ul>
                    <li><a href="#servicos">Conheça outros serviços</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                </ul>
            </nav>
        </header>
    )
}