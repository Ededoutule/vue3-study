<script setup lang="ts">
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
</script>

<template>
  <div class="app">
    <Left class="left" />
    <Right class="right" />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.left,
.right {
  flex: 1;
  width: 100%;
  height: 800px;
}
.right {
  background-color: rebeccapurple;
}

.left {
  /*background-color: green;*/
}
</style>
