import { apiRequest } from '../core';
import { ApiPlugin } from "./types";

export const apiPlugins = (guid: string): Promise<ApiPlugin[]> =>
  apiRequest(`plugins/games/${guid}.json`).then(response => response.json());

