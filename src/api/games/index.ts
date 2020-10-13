import { apiRequest } from '../core';
import { ApiGameEntities, ApiGameEntity } from "./types";

export const apiGames = async (): Promise<ApiGameEntities[]> =>
  apiRequest('games/list.json').then(response => response.json());

export const apiGame = async (guid: string): Promise<ApiGameEntity> =>
  apiRequest(`games/entities/${guid}.json`).then(response => response.json());
