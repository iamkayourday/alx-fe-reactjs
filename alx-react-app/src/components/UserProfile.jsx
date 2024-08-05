const UserProfile = (props) => {

    return(
        <section>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p><em>{props.bio}</em></p>
        </section>
    )
}
export default UserProfile