<script setup lang="ts">
// const props = defineProps<{
//   lists: {
//     name: number
//     age: number
//     sex: string
//   }
//   names: string
// }>()
const props = defineProps<{
  lists: {
    name: number
    age: number
    sex: string
  }
  names: string
}>()
console.log(props)
</script>

<template>
  <div :class="$attrs.class">Hello Word</div>
  <div>{{ props }}</div>
</template>
