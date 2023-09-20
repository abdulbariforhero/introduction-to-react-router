import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    const {name, website} = user;
    console.log(name);
    return (
        <div>
            <h2>Details About: {name} </h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;