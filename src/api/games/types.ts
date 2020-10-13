export const enum ApiGameExtensions {
  PLUGINS = 1,
  CARDS = 2,
  FOLDERS = 4,
}

export type ApiGameEntities = {
  guid: string;
  icon: string;
};

export type ApiGameEntity = {
  guid: string;
  extensions: ApiGameExtensions;
};
