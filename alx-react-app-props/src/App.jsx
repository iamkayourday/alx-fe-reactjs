import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;