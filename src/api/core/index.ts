export const apiUrl = "http://localhost:3001";

export const apiRequest = (input: string, init?: RequestInit) =>
  fetch(`${apiUrl}/api/${input}`, init);
