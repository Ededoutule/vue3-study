import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('colors', (el, binding, vnode, prevVnode) => {
    // 这会在 `mounted` 和 `updated` 时都调用
    el.style.color = binding.value

    console.log('el', el)
    console.log('binding', binding)
    console.log('vnode', vnode)
    console.log('prevVnode', prevVnode)
})
app.mount('#app')
