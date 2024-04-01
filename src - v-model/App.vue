<script setup lang="ts">
import HelloWord from '../src/components/Right.vue'
import BlogPost from '@/components/BlogPost.vue'
import InputMode from '@/components/InputMode.vue'
import { reactive, ref } from 'vue'

const title = ref('success')
const posts = ref([
  { id: 1, title: 'My journey with Vue' }
  // { id: 2, title: 'Blogging with Vue' },
  // { id: 3, title: 'Why Vue is so fun' }
])
const content = reactive({
  lists: {
    name: 10,
    age: 10,
    sex: '男'
  },
  names: 'Hello'
})
const postFontSize = ref(1)
const enlargeTextHandler = (vaule: string) => {
  console.log(vaule)
  postFontSize.value += 0
}

const count = ref()

const changhandle = (vale: string) => {
  console.log(vale)
}
</script>

<template>
  <!-- <HelloWord v-bind="content" class="title" /> -->
  <div :style="{ fontSize: postFontSize + 'em' }">
    <!-- <input type="text" v-model="count" /> -->
    <InputMode v-model.capitalize="count" :changhandle="changhandle" />
    <!-- <BlogPost
      @enlarge-text="enlargeTextHandler"
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :propF="title"
    >
      <template #naame="name">这是一个slot: {{ name }}</template>
      <template #item="{ key, name, value }">
        <div class="item">
          <p>{{ key }}</p>
          <p>by {{ name }} | {{ value }} likes</p>
        </div>
      </template>
    </BlogPost> -->
  </div>
</template>
