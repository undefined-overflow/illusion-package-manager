<template>
  <div>
    <h1>Client installation guide</h1>
    <ol>
      <li>
        <a class="button" href="http://google.com">{{ t("pages.install.download") }};</a>
      </li>
      <li>{{ t("pages.install.install") }};</li>
      <li>{{ t("pages.install.close") }};</li>
      <li>{{ t("pages.install.launch") }}.</li>
    </ol>

    <h1>Note</h1>
    <p>Please, launch this site from client.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss" scoped>
@use '@/styles/button.scss';

h1 {
  font-size: 22rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 16px;
}

ol {
  padding-bottom: 22px;
}
</style>
