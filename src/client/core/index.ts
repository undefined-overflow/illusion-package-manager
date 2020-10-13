const clientUrl = "http://localhost:5000";

export const clientRequest = (input: string, init?: RequestInit) =>
  fetch(`${clientUrl}/api/${input}`, init);
