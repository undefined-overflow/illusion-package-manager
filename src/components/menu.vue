<template>
  <aside class="menu">
    <router-link class="menu-link" :to="{ name: 'home' }">{{ t("menu.home") }}</router-link>
    <router-link class="menu-link" :to="{ name: 'settings' }">{{ t("menu.settings") }}</router-link>
    <router-link class="menu-link" :to="{ name: 'tasks' }">{{ t("menu.tasks") }}</router-link>

    <div class="block">
      <header class="block-name">{{ t("menu.category.games") }}</header>

      <template v-for="game of games" :key="game.guid">
        <router-link :to="{ name: 'library', params: { guid: game.guid } }" :class="['menu-link game-link', { 'non-installed': !game.installed }]">
          <img class="game-icon" :src="getGameIconUrl(game.icon)" />
          <div class="game-name">{{ t(`games.${game.guid}`) }}</div>
        </router-link>
      </template>
    </div>
  </aside>
</template>

<script lang="ts">
import { useI18n } from "vue-i18n";
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import { useIconsHelper } from "@/helpers/icons";
import { clientGames } from "@/client/games";
import { ApiGameEntities } from "@/api/games/types";
import { apiGames } from "@/api/games";
import { apiUrl } from "@/api/core";

type Game = { installed: boolean } & ApiGameEntities;

export default defineComponent({
  setup() {
    const games = ref<Game[]>([]);

    onMounted(async () => {
      const availables = await apiGames();
      games.value = availables.map((game) => ({ ...game, installed: false }));

      const installed = await clientGames();
      for (const guid of installed) {
        games.value.find((p) => p.guid == guid)!.installed = true;
      }
    });

    return { games, ...useIconsHelper(), ...useI18n() };
  },
});
</script>

<style lang="scss" scoped>
.menu {
  background-color: var(--header-bg-color);
  box-shadow: 1px 0 6px rgba(0, 0, 0, 0.7);
  overflow-y: auto;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  width: 280px;
}

.menu-link {
  display: block;
  user-select: none;
  padding: 6px 0px 6px 30px;
  transition: var(--anim-dur) var(--anim-timing-func);

  &:focus {
    outline: unset;
  }

  &:hover {
    background-color: var(--font-color);
    color: var(--bg-color);
  }
}

.game-link {
  display: grid;
  grid-template-columns: 16px 1fr;
  align-items: center;
  gap: 10px;
}

.router-link-active {
  background-color: var(--font-color);
  color: var(--bg-color);
}

.block-name {
  font-weight: 700;
  color: var(--font-detail-color);
  text-transform: uppercase;
  margin-top: 20px;
  padding: 10px;
}

.menu-link {
  &:first-child {
    margin-top: 20px;
  }
}
</style>

<style lang="scss" scoped>
.non-installed {
  .game-icon {
    filter: grayscale(100%);
  }

  .game-name {
    color: var(--games-unavailable-font-color);
  }

  &:hover {
    .game-icon {
      filter: unset;
    }
  }
}
</style>
