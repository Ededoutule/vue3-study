<script setup lang="ts">
import HelloWord from '../src/components/Right.vue'
import { computed, provide, reactive, ref } from 'vue'
const count = ref('red')
const updateCount = () => {
  count.value += ' heoo'
}

const countCop = computed(() => count.value + 'O')

count.value.split('').reduce(() => {

})
provide('key', 'message')

provide('message', {
  count,
  updateCount,
  countCop
})
const vExample = {
  mounted: (el) => el.focus()
}

</script>

<template>
  <HelloWord class="green"></HelloWord>
  <div v-colors:tt.foo.dis="count">3434</div>
  <input type="text" v-example>
</template>
