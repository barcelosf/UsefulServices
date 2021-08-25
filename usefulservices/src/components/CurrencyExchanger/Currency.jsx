import React, { useEffect, useState } from "react"
import "./Currency.css"

import Axios from "axios"

export default function(){
    
    const [options, setOptions] = useState([])
    const [amount, setAmount] = useState(0.00)
    const [source, setSource] = useState('')
    const [destiny, setDestiny] = useState('')
    const [conversion, setConversion] = useState('')

    const currencyURL = "https://economia.awesomeapi.com.br/json/all"
    const convertURL = `https://economia.awesomeapi.com.br/last/${source}-${destiny}`

    useEffect(async function(){
        const optionResponse = await Axios.get(currencyURL).then(response => response.data)
        const responseValues = Object.values(optionResponse)
        const optionGroup = responseValues.map(value => (<option value = {value.code}>{value.name}</option>))
        setOptions(optionGroup)
    })

    async function convertCurrency(){
        const response = await Axios.get(convertURL).then(response => response.data)
        const responseValue = Object.values(response)
        const conversionValue = amount * responseValue[0].high
        setConversion(conversionValue.toFixed(2))
    }

    return(
        <div id = "currency">
            <h3>Currency Exchanger</h3>
            <div id = "inputCurrency">
                <select name="source" id="" value = {source} onChange = {event => setSource(event.target.value)}>
                    <option value="">Selecione a Moeda Base</option>
                    {options}
                </select>
                <input type="number" value = {amount} onChange = {event => setAmount(event.target.value)}/>
                <select name="destiny" id="" value = {destiny} onChange = {event => setDestiny(event.target.value)} id = "destino">
                    <option value="">Selecione a Moeda Destino</option>
                    <option value="BRL">Real Brasileiro</option>
                    <option value="USD">Dólar Americano</option>
                    <option value="EUR">Euro</option>
                </select>
                <button onClick = {convertCurrency}>Converter</button>
            </div>
            <p>O valor convertido é {conversion}</p>
        </div>
    )
}