<script setup lang="ts">
import { ref, watch, reactive, watchEffect, onMounted } from 'vue'

interface questionObjINF {
  count: countINF,
  sum: number,
}

interface countINF {
  ttt: string;
  aa: string;
  cc?: string;
}
const todoId = ref(1)
const data = ref(null)

watch(
  todoId,
  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    data.value = await response.json()
  },
  { immediate: true }
)

const question = ref<string>('32')
const answer = ref<string>('Questions usually contain a question mark. ;-)')
const loading = ref<boolean>(false)


const questionObject = reactive<questionObjINF>({
  count: {
    ttt: 'count',
    aa: 'aa',
    cc: 'cc',
  },
  sum: 0,
})

const answerObj = () => {
  questionObject.count.ttt += 1

}


watch(() => questionObject.count, (questionObject, old) => {
  console.log(questionObject, old)
}, { deep: true, immediate: true });


// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})
const inputp = ref(null)
watchEffect(() => {
  if (inputp.value) {
    inputp.value.focus()
  } else {
    // 此时还未挂载，或此元素已经被卸载（例如通过 v-if 控制）
  }
})

onMounted(() => {
  console.info(inputp.value)
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="todoId" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>
  <button type="button" @click="answerObj">+++</button>
  <input type="text" name="" id="" ref="inputp">
  <h1>{{ data }}</h1>
</template>