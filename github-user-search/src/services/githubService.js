// import axios from 'axios';

// export const fetchUserData = async (username, location, repos) => {
//   let query = '';
//   if (username) query += `user:${username} `;
//   if (location) query += `location:${location} `;
//   if (repos) query += `repos:>=${repos}`;

//   const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
//   return response.data;
// };

import axios from 'axios';

export const fetchUserData = async (username, location, repos, page = 1) => {
  let query = '';
  if (username) query += `user:${username} `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>=${repos}`;

  const perPage = 10; // Number of items per page
  const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}&per_page=${perPage}`);
  return response.data;
};
