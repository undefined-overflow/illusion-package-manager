import { clientRequest } from '../core';
import { ClientPlugin } from './types';

export const clientPlugins = (guid: string): Promise<ClientPlugin[]> =>
  clientRequest(`plugins/${guid}`).then(response => response.json());

export const clientPluginAdd = (plugin: string, game: string) =>
  clientRequest(`plugins/${plugin}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ game }),
    method: 'POST',
  });
