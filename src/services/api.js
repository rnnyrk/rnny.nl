import 'isomorphic-fetch';

const getApiUrl = () => {
  switch (process.env.APP_ENV) {
    case 'production':
      return 'https://api.rnny.nl';
    case 'test':
      return 'http://localhost:8888';
    default:
      return 'http://localhost:8888';
  }
};

const request = ({ path, method, body }) => (
  new Promise((resolve, reject) => {
    fetch(`${getApiUrl()}${path}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response.json());
      })
      .then((json) => { resolve(json); })
      .catch((json) => {
        try {
          json.then((err) => reject(err)).catch();
        } catch (err) {
          reject(json);
        }
      });
  })
);

export default {
  get: (args) => request({ method: 'GET', ...args }),
  del: (args) => request({ method: 'DELETE', ...args }),
  post: (args) => request({ method: 'POST', ...args }),
  put: (args) => request({ method: 'PUT', ...args }),
  patch: (args) => request({ method: 'PATCH', ...args }),
};
