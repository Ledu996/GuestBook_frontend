import { useState, useEffect, useCallback } from "react";

const useFetch = ({path, method, body}) => {
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(''); 
    // DEFAULT VALUE OF SENDING STATUS IS SENDING, VALUES ARE CHANGED TROUGH REQUEST PROCEDURES 

    const doFetch = useCallback(() => {
        return fetch(`http://127.0.0.1:5000/${path}`, {
             headers: {
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin': '*',
                },
             method: method,
             body : JSON.stringify(body)
         }).then(res => {
            setStatus('Sending...');
            return res.json();
        })
         .then(data => {
            setItems(data.results);
            setStatus('Sent...');
            return data;
            
         }).catch(e => {
            setStatus('Failed');
         })
    }, [body])
    
    return { doFetch, items, status }
};

export default useFetch;


 