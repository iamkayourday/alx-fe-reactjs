import { useContext } from "react";
import UserContext from "../components/UserContext";

const UserProfile = () => {
  // Consume the context data
  const { name, age, bio } = useContext(UserContext);

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age} years</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
