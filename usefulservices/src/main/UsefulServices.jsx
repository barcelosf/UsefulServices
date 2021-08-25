import "./UsefulServices.css"
import React from "react"

import Header from "../components/header/Header"
import Url from "../components/urlShortener/Url"
import Cep from "../components/cepFinder/Cep"
import Currency from "../components/CurrencyExchanger/Currency"

export default function(props){
    return(
        <div id = "usefulServices">
            <Header/>
            <h1>Todas as função mais uteis da web em um só lugar</h1>
            <Url/>
            <Cep/>
            <Currency/>
        </div>
    )
}
