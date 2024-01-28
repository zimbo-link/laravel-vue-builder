<template>
  <div v-for="item in items" :key="items.id" :id="'g-' + item.id">
    <component :is="'style'" v-if="item.css">
        {{item.css}}
    </component>
    <div v-html="item.html" :class="item.cls" @click="selectItem" />
    <Div v-if="item.items" :items="item.items" @custom-event="toParent" />
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";

const emit = defineEmits(['custom-event'])

const props = defineProps({
  items: Array,
}); 

const selectItem = (e) => {
    emit('custom-event', e);
}

const toParent = (e) => {
    emit('custom-event', e);
}

</script>
