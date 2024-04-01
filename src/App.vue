<!--
一个可以递归渲染自己的嵌套树组件。
你可以双击一个项目将其转变为一个文件夹。
-->

<script setup>
import { ref } from 'vue'
import TreeItem from '@/components/TreeItem.vue'

const treeData = ref({
  name: 'My Tree',
  showState: true,
  children: [
    { name: 'hello', showState: true },
    { name: 'world', showState: true },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          showState: false,
          children: [
            { name: 'hello', showState: false },
            { name: 'world', showState: false }
          ]
        },
        { name: 'hello', showState: false },
        { name: 'world', showState: false },
        {
          name: 'child folder',
          showState: false,
          children: [
            { name: 'hello', showState: false },
            { name: 'world', showState: false }
          ]
        }
      ]
    }
  ]
})
</script>

<template>
  <ul>
    <TreeItem class="item" :model="treeData"></TreeItem>
  </ul>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>
