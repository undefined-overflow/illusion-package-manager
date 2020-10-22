<template>
  {{ t("popups.noClient.text1") }}<br />
  {{ t("popups.noClient.text1_1") }}
  <div class="button" @click="launch">{{ t("popups.noClient.text2") }}</div>
  {{ t("popups.noClient.text3") }}
  <RouterLink class="button" :to="{ name: 'pages-install' }">{{ t("popups.noClient.text4") }}</RouterLink>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  methods: {
    launch() {
      // window.location.href = "ipl://";
    },
  },

  setup() {
    return {
      ...useI18n(),
    };
  },

  components: {},
});
</script>

<style lang="scss" scoped>
@use '@/styles/button.scss';
</style>
