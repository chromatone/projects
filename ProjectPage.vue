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
  .flex.flex-wrap.gap-2.p-4(v-if="$params.updates.length")
    .p-8.text-4xl.leading-loose(style="flex: 1 1 150px") Project Updates
    .rounded-lg.shadow.overflow-hidden.flex.flex-col.gap-1.bg-light-100.dark-bg-dark-100(v-for="update in $params.updates" :key="update.id" style="flex: 1 1 200px") 
      img(v-if="update.cover" :src="`https://db.chromatone.center/assets/${update.cover.id}?width=400`")
      .p-2.flex.flex-col.gap-1
        .text-xs {{ update?.date }}
        .text-md {{ update?.title }}
        .text-sm {{ update?.description }}
  
</template>