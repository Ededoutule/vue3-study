<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import { type SUMINTER, DataType } from '@/type/index'

import { reactive, ref, toRefs, computed } from 'vue'

const count = ref<number>(0)

const date = ref<DataType>(DataType.one)

const mun = reactive<SUMINTER>({
  sum: 123,
  name: 'sum',
})
const tt = toRefs(mun)

const countCom = computed(() => count.value + 111)

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const myList = () => {
  return new Promise((resolve, reject) => {
    return reject(1)
  })
}

const geiFun = async () => {

  try {
    const date = await myList()
    console.info(date)
  } catch (error: any) {
    console.info(error)
  }

}
geiFun()

const myFunction = (event: any) => {
  console.log(event)
}

</script>

<template>
  <header>{{ count }}{{ date }}</header>
  <div class="box" :class="{ action: true, tesfcc: true }">{{ mun.sum }}{{ tt.sum }}</div>
  <button type="button" @click="myFunction($event)">+</button>
  <p>{{ countCom }}</p>
  <div v-if="count > 0">大于1😢</div>
  <HelloWorld :msg="mun.name" class="boz" v-else />
  <li :key="value" v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.box {
  height: var(--section-gap);
  text-align: center;
  text-decoration: double;
}

.action {
  background-color: var(--vt-c-indigo);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
