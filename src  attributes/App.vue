<script setup lang="ts">
import HelloWord from '../src/components/Right.vue'
import { reactive, ref } from 'vue'

const content = reactive({
  name: 'dd',
  age: 34,
  sex: '男'
})

const onClick = () => {
  content.age += 1
}
const onClick1 = (value) => {
  console.log(value)
  content.name += 1
}
</script>

<template>
  <HelloWord
    v-bind="content"
    class="title"
    style="color: #2c3e50"
    @click="onClick"
    @ecot-t="onClick1"
  />
</template>
