<script setup lang="ts">
import { useAttrs } from 'vue'
defineOptions({
  // inheritAttrs: false
})
const attrs = useAttrs()
console.log(attrs)
const emits = defineEmits(['ecot-t'])
emits('ecot-t', 232)
</script>

<template>
  <div
    @click="
      () => {
        emits('ecot-t', 232)
      }
    "
  >
    Hello Word
  </div>
  <div>{{ attrs }}</div>
  <!--  <div @click="attrs.onClick()">3432</div>-->
</template>
