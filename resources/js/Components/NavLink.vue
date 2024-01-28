<template>
  <Link
    :class="$page.component === component ? 'active' : 'normal'"
    :href="href"
    preserve-scroll
  >
    {{ name }}
  </Link>
</template>

<script setup>
import { Link } from "@inertiajs/vue3"; 

defineProps(["name", "component", "href"]);
</script>

<style scoped>
.normal {
  color: #ffffff;
}
.active {
  color: red;
  font-weight: 600;
  text-decoration: none;
}
</style>
