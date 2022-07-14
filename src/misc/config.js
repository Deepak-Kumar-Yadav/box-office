const apiBaseUrl = 'https://api.tvmaze.com';

async function apiGet(queryString) {
  const response = await fetch(`${apiBaseUrl}${queryString}`).then(r =>
    r.json()
  );
  return response;
}

export default apiGet;
