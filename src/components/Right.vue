<script setup lang="ts">
import { reactive, watch } from 'vue'
import TreeItem from '@/components/TreeItems.vue'

const listObj = reactive({
  key: '0',
  value: 'ceshi0',
  showState: true,
  // deletedState: false,
  listChild: [
    {
      key: '1',
      value: 'cesh1',
      showState: true,
      deletedState: false,
      listChild: [
        {
          key: '1-1',
          value: 'ceshi1-1',
          showState: true,
          deletedState: false,
          listChild: [
            {
              key: '1-1-1',
              value: 'ceshi1-1-1',
              showState: true,
              deletedState: false,
              listChild: []
            }
          ]
        },
        {
          key: '1-2',
          value: 'ceshi1-2',
          showState: true,
          deletedState: false,
          listChild: [
            {
              key: '1-2-1',
              value: 'ceshi1-2-1',
              showState: true,
              deletedState: false,
              listChild: []
            }
          ]
        }
      ]
    },
    {
      key: '2',
      value: 'ceshi2',
      showState: true,
      deletedState: false,
      listChild: [
        {
          key: '2-1',
          value: 'ceshi2-1',
          showState: true,
          deletedState: false,
          listChild: [
            {
              key: '2-1-1',
              value: 'ceshi2-1-1',
              showState: true,
              deletedState: false,
              listChild: []
            }
          ]
        }
      ]
    },
    {
      key: '3',
      value: 'ceshi3',
      showState: true,
      deletedState: false,
      listChild: []
    },
    {
      key: '4',
      value: 'ceshi4',
      showState: true,
      deletedState: false,
      listChild: []
    },
    {
      key: '5',
      value: 'ceshi5',
      showState: true,
      deletedState: false,
      listChild: []
    },
    {
      key: 6,
      value: 'ceshi6',
      showState: true,
      deletedState: false,
      listChild: []
    },
    {
      key: 7,
      value: 'ceshi7',
      showState: true,
      deletedState: false,
      listChild: []
    },
    {
      key: 8,
      value: 'ceshi8',
      showState: true,
      deletedState: false,
      listChild: []
    }
  ]
})

watch(
    () => listObj.listChild,
    (newValue) => {
      console.log('改不了', newValue)
      // listObj.listChild = []
    },
    { deep: true }
)

enum FINALIST {
  delete = 'delete'
}

const addItem = (item) => {
  item.key
  if (item.type === FINALIST.delete) {
    if (listObj.listChild.length === 0) return
    for (let i = 0; i < listObj.listChild; i++) {
      if (i.key === item.key) {
        // listObj.listChild[i] = {key: undefined, listChild: [], showState: true, value: "ceshi2"}
      }
    }
    // change(item.key, )
  }
  console.log(listObj)
  console.log(item)
}

const change = (key, listobj) => {}
</script>
<template>
  <div>
    <TreeItem @update="addItem" :model="listObj" class="right" />
  </div>
</template>
<style scoped></style>
