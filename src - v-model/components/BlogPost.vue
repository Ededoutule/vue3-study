<script setup lang="ts">
import { reactive, toRefs } from 'vue'

const prop = defineProps({
  title: {
    type: String
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 对象或数组的默认值
    // 必须从一个工厂函数返回。
    // 该函数接收组件所接收到的原始 prop 作为参数。
    default() {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  // 在 3.4+ 中完整的 props 作为第二个参数传入
  propF: {
    validator(value: string, props) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个
    // 工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})

const emit = defineEmits({
  // 没有校验
  click: null,
  'enlarge-text': null,
  // 校验 submit 事件
  submit: ({ email, password }) => {
    if (email && password) {
      return true
    } else {
      console.log('Invalid submit event payload!')
      return false
    }
  }
})

const submitForm = (email: string, password: string) => {
  emit('submit', { email, password })
}
submitForm('s', 'sfdf')
const items = reactive({
  items: [
    {
      key: 1,
      name: 'name1',
      value: 'name1'
    },
    {
      key: 2,
      name: 'name2',
      value: 'name2'
    },
    {
      key: 3,
      name: 'name3',
      value: 'name3'
    },
    {
      key: 4,
      name: 'name4',
      value: 'name4'
    },
    {
      key: 5,
      name: 'name5',
      value: 'name5'
    },
    {
      key: 6,
      name: 'name6',
      value: 'name6'
    }
  ]
})

console.log(toRefs(prop))
// emit('enlarge-text', [234])
</script>
<!-- BlogPost.vue, 省略了 <script> -->
<template>
  <div class="blog-post">
    <h4>{{ prop.title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <slot name="naame" v-bind="items?.items[0]"></slot>
    <ul>
      <li v-for="item in items?.items" :key="item.key">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
  </div>
  <div @click="emit('enlarge-text')">23213:{{ prop.propF }}</div>
</template>
