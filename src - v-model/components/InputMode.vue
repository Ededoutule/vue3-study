<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  changhandle: {
    default: () => {
      return () => {}
    }
  }
})

const [model, modifiers] = defineModel({
  set(value: any) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})
props.changhandle('er')
// defineOptions
// console.log(model, modifiers) // { capitalize: true }
// const ipute = ref(0)
// function update() {
//   model.value++
// }
// update()
</script>

<template>
  <!-- <input type="text" name="" id="" v-model="ipute" /> -->
  <!-- <div>{{ ipute }}</div> -->
  <input type="text" v-model="model" />
</template>
