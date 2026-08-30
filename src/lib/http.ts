import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL || 'https://api.example.com',
  timeout: 5000,
});

export async function fetchWithCancel(url: string) {
  // CancelToken deprecated in axios 0.22+, removed in 1.x — use AbortController
  const source = axios.CancelToken.source();

  const timeout = setTimeout(() => {
    source.cancel('Request timed out');
  }, 3000);

  try {
    const response = await client.get(url, {
      cancelToken: source.token,
    });
    clearTimeout(timeout);
    return response.data;
  } catch (err: any) {
    clearTimeout(timeout);
    if (axios.isCancel(err)) {
      throw new Error(`Cancelled: ${err.message}`);
    }
    throw err;
  }
}

export async function postData(url: string, data: unknown) {
  const source = axios.CancelToken.source();

  const response = await client.post(url, data, {
    cancelToken: source.token,
  });

  return response.data;
}
