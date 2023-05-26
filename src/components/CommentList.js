



const ComponentList = (props) => {
    const { name, message } = props;
    return (
        <li>{`${message}  Posted By: ${name}`}</li>
    )
};

export default ComponentList;
