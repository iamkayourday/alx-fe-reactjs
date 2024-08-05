const UserProfile = (props) => {

    return(
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age} years</p>
            <p>Bio: {props.bio}</p>
        </div>
    )
}
export default UserProfile