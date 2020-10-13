import { createI18n } from "vue-i18n";

import english from "./languages/english";

export const i18n = createI18n({
  locale: "en",
  messages: {
    en: english,
  },
});
