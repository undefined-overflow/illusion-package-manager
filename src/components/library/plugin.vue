<template></template>

<script lang="ts">
import { defineAsyncComponent } from "vue";

@Options({
  components: {
    AddIconComponent: defineAsyncComponent(() => import("@/components/icons/plugin/add.vue")),
    RemoveIconComponent: defineAsyncComponent(() => import("@/components/icons/plugin/add.vue")),
  },
})
export default class extends Vue {}
</script>
