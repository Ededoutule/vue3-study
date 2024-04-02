<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'

const editObj = reactive({ edit: false, editInput: 'new tree', propsWhite: {} })
const input = ref()
const props = defineProps({
  model: Object
})
const emits = defineEmits(['update'])
const marginRight = () => {
  return { 'margin-left': 3 * 5 + 'px' }
}

const isFolder = computed(() => {
  return props.model!.listChild && props.model!.listChild.length
})

const dbClick = (model: Object | undefined) => {
  emits('update', model)
  editObj.edit = !editObj.edit
  if (!props.model!.listChild) {
    props!.model = { ...props.model, listChild: [] }
  }
  nextTick(() => {
    input.value.focus()
  })
}
const Click = () => {
  props.model!.showState = !props.model!.showState
}
const add = () => {
  console.log(props.model)
  editObj.edit = !editObj.edit
  if (props.model!.listChild) {
    if (props.model!.listChild.length === 0) {
      props.model!.listChild.push({
        key: props.model!.key + '-1',
        value: editObj.editInput,
        showState: true,
        listChild: []
      })
    } else {
      props.model!.listChild.push({
        key: props.model!.key + '-' + (props.model!.listChild.length + 1),
        value: editObj.editInput,
        showState: true,
        listChild: []
      })
    }
  } else {
    props!.model = { ...props.model, listChild: [] }
  }
}

const deleteItem = () => {
  if (props.model!.listChild.length > 0) {
    props.model!.listChild = []
  } else {
    emits('update', { type: 'delete', key: props.model.key })
  }
}
</script>

<template>
  <div class="item">
    <!--    <TransitionGroup name="list">-->
    <div :class="{ bold: isFolder }" :style="marginRight()" class="common" @click.stop.self="Click">
      {{ model!.key }} - {{ model!.value }}
      <button class="delete" @click.stop.self="dbClick">+</button>
      <button class="delete" @click.stop.self="deleteItem">-</button>

      <TreeItems
        v-for="item in model!.listChild"
        :key="item.key"
        :model="item"
        @update="$emit('update', $event)"
        v-show="model!.showState"
      />
      <div v-show="editObj.edit" class="edit">
        <input type="text" ref="input" v-model="editObj.editInput" @blur="add" />
      </div>
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
  display: inline-block;
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

.edit {
  margin-left: 15px;
}
</style>