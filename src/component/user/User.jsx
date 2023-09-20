import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            {/* <link to={`/user/${id}`} >Show Details</link> */}
            {/* <Link to="/users">Users</Link> */}
            <Link to={`/user/${id}`}>show Details</Link>
            <Link to={`/user/${id}`}><button>Click Here to see more</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.array.isRequired,
}
export default User;