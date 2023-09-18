const User = (user) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
        </div>
    );
};

export default User;