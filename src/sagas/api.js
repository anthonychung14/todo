/**
 * Util to create requests
 */

// const BASE_URL = 'localhost:2017/public/';

export const createRequest = (options = {}) => {
  const method = options.method || 'GET';
  let body = options.body ? options.body : false;

  const base = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    body = typeof body === 'string' ? body : JSON.stringify(body);
    base.body = body;
  }

  return base;
};

export const fetchJSON = (url, request = createRequest()) =>
  fetch(url, request)
    .then(res => res.json())
    .catch(e => {
      // console.log(e, 'ERROR');
      throw new Error(e);
    });
