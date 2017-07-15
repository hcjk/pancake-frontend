const API_URL = 'http://localhost:3000';

export default (url, method, h, data) => {
  const headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    ...h
  };
  return fetch(`${API_URL}${url}`, {
    method,
    headers,
    body: data ? JSON.stringify(data) : null
  })
  // Pipe the stuff
  .then(response => response.json())
  .catch((error) => {
    throw error;
  });
};
