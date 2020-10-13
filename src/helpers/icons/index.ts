import { apiUrl } from "@/api/core";

export const useIconsHelper = () => ({
  getGameIconUrl(icon: string, size: number = 1) {
    return `${apiUrl}/assets/icons/games/${icon}/${size}.ico`;
  },
});
