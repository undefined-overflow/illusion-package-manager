const isDevelopment = process.env.NODE_ENV == 'development';

export const apiUrl = isDevelopment ? "https://undefined-overflow.github.io/IllusionFakeApi" : "http://localhost:3001";

export const apiRequest = (input: string, init?: RequestInit) =>
  fetch(`${apiUrl}/api/${input}`, init);
