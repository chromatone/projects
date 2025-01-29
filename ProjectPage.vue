<script setup>
import {onMounted} from 'vue'
import { useData } from 'vitepress'

const { params } = useData()

onMounted(()=>{
  console.log('mounted')
})

</script>

<template lang='pug'>
.flex.flex-col.rounded-lg.overflow-hidden.shadow.bg-light-700.mx-2.max-w-45ch
  .flex.flex-col.p-2(:style="{ backgroundColor: $params?.color }")
    img(:src="`/cover/${$params?.slug}.webp`")
  .p-4.text-lg.bg-light-200.flex.flex-col.gap-2
    .text-4xl {{ $params?.title }}
    .p-0 {{ $params?.description }}

  
</template>