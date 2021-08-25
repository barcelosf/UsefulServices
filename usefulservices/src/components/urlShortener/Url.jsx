import React, {useState} from "react"
import "./Url.css"
import Shortener from "node-url-shortener"

export default function(props){

    const [url, setUrl] = useState('')
    const [short, setShort] = useState('')

    return(
        <div id = "urlShortener">
            <h3>URL Shortener</h3>
            <div id = "inputText">
                 <input type="text" name = "baseUrl" placeholder = "Insira a url a ser encurtada" value = {url} onChange = {event => setUrl(event.target.value)}/>
                 <button onClick = {function(){Shortener.short(url, (err, url) => setShort(url))}}>Encurtar</button>
            </div>
            <a href={short} target="_blank">{`URL Encurtada: ${short}`}</a>
        </div>
    )
}