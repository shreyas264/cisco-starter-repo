import React , {useState, useEffect} from 'react'
import axios from "axios";
import "./IPDisplay.css"

const IPDisplay = ({type}) => {
    const [ip, setIp] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const url = type === "ipv4" ? 'https://api.ipify.org?format=json' : 'https://api64.ipify.org?format=json';

        axios   
            .get(url)
            .then((response) => {
                setIp(response.data.ip);
            })
            .catch((err) => {
                setError("Unable to fetch IP address please try again later");
            });            
    }, [type]);

  return (
    <div className='container'>
        <h3>Your {type.toUpperCase()} Address:</h3>
        {error ? <p className='error'>{error}</p> : <p>{ip}</p>}
    </div>
  )
}

export default IPDisplay

