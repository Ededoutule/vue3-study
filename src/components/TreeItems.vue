<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  model: Object
})

const emits = defineEmits(['update'])
const marginRight = (key: string) => {
  let length = key?.toString()?.split('-').length
  return { 'margin-left': length * 5 + 'px' }
}

const isFolder = computed(() => {
  return props.model!.listChild && props.model!.listChild.length
})

const dbClick = (model: Object | undefined) => {
  emits('update', model)
}
const Click = (model: Object | undefined) => {
  props.model!.showState = !props.model!.showState
}
const add = () => {
  props.model!.listChild.push({
    key: '2-1-1',
    value: 'ceshi2-1-1'
  })
}
console.log(props.model)
</script>

<template>
  <div class="item">
    <!--    <TransitionGroup name="list">-->
    <div
      :class="{ bold: isFolder }"
      :style="marginRight(model!.key)"
      class="common"
      @dblclick.stop="dbClick"
      @click.stop="Click"
    >
      {{ model!.key }} - {{ model!.value }} <button v-show="isFolder" @click="add(model)">+</button
      ><button class="delete">-</button>

      <TreeItems
        v-for="item in model!.listChild"
        :key="item.key"
        :model="item"
        @update="$emit('update', $event)"
        v-show="model!.showState"
      />

      <input type="text" v-show="model.edit" />
    </div>
    <!--    </TransitionGroup>-->
  </div>
</template>

<style scoped>
.item {
  cursor: pointer;
  line-height: 1.5;
}

.bold {
  font-weight: bold;
}

.common {
  cursor: pointer;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
