import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    // state-->data
    // state -->loader
    // use effect
    //fetch --> state set --> set state
    return (
        <div>
            <h2>Our Users {users.length} </h2>
            <p>Fantastic and vodro Users</p>
            <div>
                {
                    users.map(user => <User key={user.id} user={user} ></User>)
                }
            </div>
        </div>
    );
};

export default Users;