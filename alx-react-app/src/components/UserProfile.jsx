const UserProfile = (props) => {

    return(
        <section>
            <h2>{props.Name}</h2>
            <p>{props.Age}</p>
            <p><em>{props.Bio}</em></p>
        </section>
    )
}
export default UserProfile