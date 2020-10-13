<template>
  <section class="available">{{ t('library.pages.available.message') }}</section>
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
