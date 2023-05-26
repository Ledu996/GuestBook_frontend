import { useState } from "react";
import useFetch from "../hooks/useFetch";

const MessagePage = () => {
    // submission of the form should call doFetch in order to make HTTP POST request
    // define state for active button
    const [username, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [enable, setEnable] = useState(false);

    const { doFetch, status } = useFetch({path: 'message/create', method: 'POST', body: { username, message }});
    

    return (
        <form onSubmit = {async (e) => {
            e.preventDefault(); 
            await doFetch();
            setEnable(true);
            }}>
            <label>Name:</label>
            <input placeholder = "type your name ..." onChange={(e) => {setUserName(e.target.value)}}></input>
            <label>Message:</label>
            <input placeholder = "type your message ..." onChange={(e) => {setMessage(e.target.value)}}></input>
            <button type = "submit" disabled = {enable}>Submit</button>
            <p>{status}</p>
        </form>
    )
};

export default MessagePage;