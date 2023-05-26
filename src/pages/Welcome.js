import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ComponentList from "../components/CommentList";
import { useNavigate } from "react-router-dom";
const WelcomePage = () => {
    // import custom hook for fetching data
    // Create separate component for the list inside welcome page  

    const { doFetch, items } = useFetch({path: 'message/getLastTen'});
    const navigate = useNavigate();
    useEffect(() => {
        doFetch();
    }, []);

    return (
        <div>
            <h1>GuestBook</h1>
            <p>See what other people wrote about us and fell free to leave a message.</p>
            <ul>
                {items.map((item) => { // separate component for the list 
                    const { message, name } = item;
                    return <ComponentList name = {name} message = {message} /> 
                })}
            </ul>
            <button onClick={() => {navigate('/messagePage')}}>Leave a message</button>
        </div>
    )
};

export default WelcomePage;