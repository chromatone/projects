<script setup>
import { onMounted } from 'vue'
import { useData } from 'vitepress'

const { params } = useData()


</script>

<template lang='pug'>
.flex.flex-wrap.rounded-lg.overflow-hidden.shadow.bg-light-100.dark-bg-dark-400.w-full
  .flex.flex-col.p-2.flex-1(:style="{ backgroundColor: $params?.color }")
    img(:src="`/cover/${$params?.slug}.webp`")
  .flex-1.p-4.text-lg.flex.flex-col.gap-2
    .text-4xl {{ $params?.title }}
    .p-0 {{ $params?.description }}



  
</template>