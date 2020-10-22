import { ApiGameExtensions } from '@/api/games/types';
import plugins from "./plugins.json";
import games from "./games.json";

export default {
  menu: {
    home: "Home",
    settings: "Settings",
    tasks: "Tasks",
    category: {
      games: 'Games',
    }
  },
  library: {
    pages: {
      home: {
        message: "Prepare favorite hand.",
      },
      available: {
        message: "No game installed. You can setup path in settings.",
      },
    },
  },
  settings: {
    games: {
      remove: "Remove game",
      save: "Save",
      add: "Add",
      undo: "Undo",
      path: "Enter game path",
    },
  },
  extensions: {
    [ApiGameExtensions.CARDS]: "Cards",
    [ApiGameExtensions.PLUGINS]: "Plugins",
    [ApiGameExtensions.FOLDERS]: "Folders",
  },
  popups: {
    noClient: {
      text1: "Client not responding. Maybe it is not running.",
      text1_1: "Please click",
      text2: "here to run",
      text3: "or",
      text4: "here to install.",
    },
  },
  pages: {
    install: {
      download: 'Download client',
      install: 'Install client',
      close: 'Close this tab',
      launch: 'Launch client'
    },
  },
  games,
  plugins,
};
