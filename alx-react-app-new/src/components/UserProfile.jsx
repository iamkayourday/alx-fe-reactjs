const UserProfile = (props) => {

    return(
        <div style={{ 
            border: '1px solid gray',
            padding: '10px', 
            margin: '10px' }}>
            <h2 style={{ color: 'blue' }}>Name: {props.name}</h2>
            <p style={{ fontWeight: 'bold' }}>Age: {props.age} years</p>
            <p style= {{color:'lightBlue'}}>Bio: {props.bio}</p>
        </div>
    )
}
export default UserProfile