import React, { useState } from "react"
import "./Cep.css"

import Axios from "axios"

export default function (){

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState([])

    const cepUrl = ` https://cep.awesomeapi.com.br/json/${cep}`

    async function addressFinder(){
        const address = await Axios.get(cepUrl).then(response => response.data)
        const addressValues = [address.address, address.district, address.city, address.state, address.ddd]
        const addressKeys = ["Endereço", "Bairro", "Cidade", "Estado", "DDD"]
        const tableRows = []
        for(let i = 0;i<addressKeys.length;i++){
             tableRows.push(<tr id = {i+1}><td>{addressKeys[i]}</td><td>{addressValues[i]}</td></tr>)
        }
        setEndereco(tableRows)
    }

    return(
        <div id = "cepFinder">
            <h3>Address Finder</h3>
            <div id = "inputCep">
                <input type="text" name = "cep"placeholder = "Digite o CEP do Endereço a ser Encontrado" value = {cep} onChange = {event => setCep(event.target.value)}/>
                <button onClick = {addressFinder}>Encontrar</button>
            </div>
            <table border = '1'>
                <thead>
                    <tr>
                        <th colSpan = {2}>Endereço Encontrado</th>
                    </tr>
                </thead>
                <tbody>
                    {endereco}
                </tbody>
            </table>
        </div>
    )
}