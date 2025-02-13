import axios from 'axios';
import { useState, useEffect } from 'react';
export const api = axios.create({ baseURL: 'http://localhost:3333/api/v1', withCredentials: true });

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(error));
  }, []);

  return { data, error };
}

export async function post(url, data) {
  const response = {
    data: null,
    error: null
  };

  try {
    const res = await api.post(url, data);
    response.data = res.data;
  } catch (error) {
    response.error = error;
  }

  return response;
}

export async function deleteRequest(url) {
  const response = {
    data: null,
    error: null
  };

  try {
    const res = await api.delete(url);
    response.data = res.data;
  } catch (error) {
    response.error = error;
  }

  return response;
}
