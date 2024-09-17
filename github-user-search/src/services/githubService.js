import axios from 'axios';

export const fetchUserData = async (username, location, repos) => {
  let query = '';
  if (username) query += `user:${username} `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>=${repos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data;
};

