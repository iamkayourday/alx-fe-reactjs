import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const data = await fetchUserData(username, location, repos);
      setUserData(data.items || []);  
      setUsername('');  
      setLocation('');
      setRepos('')
    } catch (err) {
      setError(true);
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}

      {userData.length > 0 && (
        <div>
          {userData.map((user) => {
            // console.log(user); 
            console.log(user.public_repos)

            return (
              <div key={user.id}>
                <img src={user.avatar_url} alt={user.login} width={100} />
                <h3>{user.login}</h3>
                <p>{user.location || 'No location specified'}</p>
                <p>Repositories: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
