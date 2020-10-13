import { clientRequest } from '../core';

export const clientGames = (): Promise<string[]> =>
  clientRequest('games').then(response => response.json());
