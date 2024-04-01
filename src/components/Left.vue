<script setup>
import { reactive, watch } from 'vue'
import TreeItem from '@/components/TreeItems.vue'

const listObj = reactive({
  key: '0',
  value: 'ceshi0',
  showState: true,
  listChild: [
    {
      key: '1',
      value: 'cesh1',
      showState: true,
      listChild: [
        {
          key: '1-1',
          value: 'ceshi1-1',
          showState: true,
          listChild: [
            {
              key: '1-1-1',
              value: 'ceshi1-1-1',
              showState: true,
              listChild: []
            }
          ]
        },
        {
          key: '1-2',
          value: 'ceshi1-2',
          showState: true,
          listChild: [
            {
              key: '1-2-1',
              value: 'ceshi1-2-1',
              showState: true,
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
      listChild: [
        {
          key: '2-1',
          value: 'ceshi2-1',
          listChild: [
            {
              key: '2-1-1',
              value: 'ceshi2-1-1',
              listChild: []
            }
          ]
        }
      ]
    },
    {
      key: '3',
      value: 'ceshi3',
      showState: true
    },
    {
      key: '4',
      value: 'ceshi4',
      showState: true
    },
    {
      key: '5',
      value: 'ceshi5',
      showState: true
    },
    {
      key: 6,
      value: 'ceshi6',
      showState: true
    },
    {
      key: 7,
      value: 'ceshi7',
      showState: true
    },
    {
      key: 8,
      value: 'ceshi8',
      showState: true
    }
  ]
})

watch(
  () => listObj.listChild,
  () => {
    console.log('改不了')
  }
)

const addItem = (item) => {
  // console.log(item)
  // if (item.listChild) {
  //   item.listChild.push({
  //     key: item.key + '-' + item.listChild.length + 1,
  //     value: item.value + '-' + item.listChild.length + 1,
  //     showState: true,
  //     edit: true
  //   })
  // } else {
  //   item = {
  //     ...item,
  //     listChild: {
  //       key: item.key + '-1',
  //       value: item.value + '-1',
  //       showState: true,
  //       edit: true
  //     }
  //   }
  // }
}
</script>
<template>
  <div>
    <TreeItem @update="addItem" :model="listObj" />
  </div>
</template>
<style scoped></style>
