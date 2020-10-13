<template>
  <div class="games">
    <h1>Installed games</h1>
    <!-- <installed-component v-for="game in games" v-bind="game" :key="game.guid" /> -->
    <!-- <div class="button" @click="toggleGameInstallerModal">{{ t("settings.games.add") }}</div> -->
  </div>
</template>

<script lang="ts">
// import { defineAsyncComponent, defineComponent, onMounted, ref } from "vue";
// import { useI18n } from "vue-i18n";
// import { useModal } from "@/modules/modal";
// import InstalledComponent from "./games/installer.modal.vue";

// type Game = {
//   guid: string;
//   icon: string;
//   path: string;
// };

// export default defineComponent({
//   methods: {
//     toggleGameInstallerModal() {
//       // this.add({ component: InstalledComponent });
//     },
//   },
//   setup() {
//     const games = ref<{ [key: string]: Game }>({});

//     onMounted(async () => {
//       games.value = Object.fromEntries(
//         await Promise.all(
//           (await clientGames()).map(async (game) => [
//             game.guid,
//             {
//               guid: game.guid,
//               path: game.path,
//               icon: await apiGameSingle({ guid: game.guid }),
//             },
//           ])
//         )
//       );
//     });

//     return { games, ...useI18n() /*...useModal()*/ };
//   },
//   components: {
//     InstalledComponent: defineAsyncComponent(() => import("@/components/settings/games/installed.vue")),
//   },
// });
</script>

<style lang="scss" scoped>
@use '@/styles/button.scss';

h1 {
  font-size: 24rem;
  margin-bottom: 10px;
}
</style>
