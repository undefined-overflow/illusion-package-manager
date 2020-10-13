<template>
  <section class="home">{{ t('library.pages.home.message') }}</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    return { ...useI18n() };
  },
});
</script>
