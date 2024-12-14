import React, {useEffect, useState} from 'react'

const PacketLatency = () => {
    const [latency, setLatency] = useState(null);
    const [error, setError] = useState("");

    useEffect(() =>{
        const ws = new WebSocket("ws://localhost:55455");

        ws.onopen = () => {
            console.log("Websocket Connected.")
        };

        ws.onmessage =(event) =>{
            try{
                const data = JSON.parse(event.data);
                if(data.timestamp) {
                    const currrentTime = Date.now();
                    const packetLatency = currrentTime - data.timestamp;
                    setLatency(packetLatency);
                }
            } catch (err) {
                console.error("Error parsing websocket message", err);
            }
        };

        ws.onerror = (err) => {
            console.error("Websocket error:", err);
            setError("Unable to connect to websocket.");
        };

        ws.onclose = () => {
            console.log("Websocket disconnected.");
        };

        return () =>{
            ws.close();
        }
    }, []);

    return (
    <div className='container'>
      <h3>Packet Latency</h3>
      {error ? (<p className='error'>{error}</p>
                ) : latency !== null ? (
                    <p>Latency: {latency} ms</p>
                ) : (
                    <p>Waiting for packets...</p>
                )}
    </div>
  
)
}

export default PacketLatency
