<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  model: Object
})

const isOpen = ref(false)
const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})

function toggle() {
  props.model.showState = !props.model.showState
}

function changeType() {
  if (!isFolder.value) {
    props.model.children = []
    addChild()
    props.model.showState = true
  }
}

function addChild() {
  props.model.children.push({ name: 'new stuff' })
}
console.log(props.model)
</script>

<template>
  <li>
    <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
      {{ model.name }}
      <span v-if="isFolder">[{{ model.showState ? '-' : '+' }}]</span>
    </div>
    <ul v-show="model.showState" v-if="isFolder">
      <!--
							一个可以通过其“name”选项递归渲染自己的组件，
							(如果使用单文件组件，则从文件名推断)
						-->
      <TreeItem class="item" v-for="model in model.children" :model="model"> </TreeItem>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
