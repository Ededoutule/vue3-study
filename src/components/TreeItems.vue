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
  editObj.edit = !editObj.edit
  if (props.model!.listChild) {
    const obj = {
      key: props.model!.key + '-1',
      value: editObj.editInput,
      showState: true,
      listChild: []
    }
    if (props.model!.listChild.length > 0)
      obj.key = props.model!.key + '-' + (props.model!.listChild.length + 1)
    props.model!.listChild.push(obj)
  } else {
    props!.model = { ...props.model, listChild: [] }
  }
  props.model!.showState = true
  editObj.editInput = 'new tree'
}

const deleteItem = () => {
  if (props.model!.listChild.length > 0) {
    props.model!.listChild = []
  } else {
    // emits('update', { type: 'delete', key: props.model.key })
    props.model!.deletedState = true
  }
}

const ondrop = (e) => {
  console.log('ondrop', props.model.key)
  console.log(e)
}

const ondragstart = (e) => {
  console.log('ondragstart', props.model.key, e)
}

const ondragenter = (e) => {
  console.log('ondragenter', props.model.key, e)
  e.dataTransfer.dropEffect = 'move'
}
const ondragover = (e) => {
  // console.log('ondragover', props.model.key, e)
  e.preventDefault()
}
const ondragleave = (e) => {
  // console.log('ondragleave', props.model.key, e)
}
</script>

<template>
  <div class="item">
    <!--    <TransitionGroup name="list">-->
    <div
      :class="{ bold: isFolder }"
      :style="marginRight()"
      class="common"
      @click.stop.self="Click"
      v-if="!model!.deletedState"
      draggable="true"
      @drop.stop.self="ondrop"
      @dragend.stop.self="ondragend"
      @dragover.stop.self="ondragover"
      @dragstart.stop.self="ondragstart"
      @dragenter.stop.self="ondragenter"
    >
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
        <input type="text" ref="input" v-model="editObj.editInput" @keyup.enter="add" />
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
  margin-top: 2px;
  margin-bottom: 2px;
}

/*.list-enter-active,*/
/*.list-leave-active {*/
/*  transition: all 0.5s ease;*/
/*}*/

/*.list-enter-from,*/
/*.list-leave-to {*/
/*  opacity: 0;*/
/*  transform: translateX(30px);*/
/*}*/

.edit {
  margin-left: 15px;
}
</style>
