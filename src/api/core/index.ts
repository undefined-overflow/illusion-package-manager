const isDevelopment = process.env.NODE_ENV == 'development';

export const apiUrl = isDevelopment ? "http://localhost:3001" : "https://undefined-overflow.github.io/IllusionContentManager";

export const apiRequest = (input: string, init?: RequestInit) =>
  fetch(`${apiUrl}/api/${input}`, init);
