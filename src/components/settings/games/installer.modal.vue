<template>
  <div class="games">
    <div class="selector">
      <div class="game input" v-if="selected" @click="showDropdown = !showDropdown">
        {{ t(`games.${selected.guid}`) }}
      </div>
      <transition name="dropdown-anim" mode="out-in">
        <div class="elements" v-if="showDropdown">
          <div
            class="game"
            v-for="game of games"
            :key="game.guid"
            @click="
              selected = game;
              showDropdown = false;
            "
          >
            {{ t(`games.${game.guid}`) }}
            <div class="supports">
              <div class="support" v-for="support of game.supports" :key="support">
                {{ t(`categories.${support}`) }}
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <input class="input" type="text" placeholder="Game directory" size="40" />

    <div class="button">Add</div>
  </div>
</template>

<script lang="ts">
import { apiGames } from "@/api";
import { ApiGameEntities } from "@/api/types";
import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

type Game = {
  guid: string;
  icon: string;
};

export default defineComponent({
  data() {
    return { showDropdown: false };
  },
  setup() {
    const games = ref<ApiGameEntities[]>([]);
    const selected = ref<ApiGameEntities | null>(null);

    onMounted(async () => {
      const availables = await apiGames();

      games.value = availables;
      selected.value = games.value[0];
    });

    return { games, selected, ...useI18n() };
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/button.scss';

.games {
  gap: 10px;
  display: grid;
  grid: auto auto / 1fr auto;
  align-content: start;
  align-items: center;
  user-select: none;
}

.selector {
  grid-column: 1 / -1;
}

.game {
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-color);
    color: var(--font-color);
  }
}

.elements {
  position: absolute;
  background-color: var(--font-color);
  overflow-y: auto;
  max-height: 40vh;
}

.supports {
  padding: 0 20px;
  font-weight: bold;
  font-size: 12rem;
  text-transform: lowercase;
  font-style: italic;
}

.support {
  display: inline;

  &:not(:last-child) {
    margin-right: 10px;
  }
}

.dropdown-anim-enter-active,
.dropdown-anim-leave-active {
  transition: var(--anim-dur) var(--anim-timing-func);
}

.dropdown-anim-enter-from,
.dropdown-anim-leave-to {
  opacity: 0;
}

input {
  padding: 10px;
  border: unset;
  background-color: var(--font-color);

  &:focus {
    outline: unset;
  }

  &:focus,
  &:hover {
    background-color: var(--bg-color);
    color: var(--font-color);
  }
}

.input {
  transition: var(--anim-dur) var(--anim-timing-func);
}

.element {
  &:not(:first-child) {
    margin-top: 10px;
  }
}
</style>
