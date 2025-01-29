<script setup>
import { data } from './projects.data'

</script>

<template lang='pug'>
.text-2xl.flex.p-2.mt-8(style="flex: 1 0 100%")
  h1.font-bold Projects
  .flex-1 
  .op-80 {{ data.length }}
slot 
.flex.flex-wrap.gap-4.p-4
  a.items-stretch.bg-light-800.text-xl.no-underline.rounded.overflow-hidden.shadow.hover-brightness-110.flex.flex-wrap(
    style="flex: 1 1 400px"
    :href="`/${project?.slug}/`"
    v-for="project in data" :key="project"
    ) 
    .p-0(style="flex: 1 1 180px")
      img( :src="`/cover/${project?.slug}.webp`")
    .flex.flex-col.gap-2(style="flex: 1 1 250px")
      .p-2.flex.flex-col.gap-2
        .text-sm.flex.flex-wrap.gap-1
          .op-60 {{ project?.start_date }} − {{ project?.end_date || 'Present' }}
          .flex-1

        .text-2xl.font-bold {{ project?.title }}

        .text-sm.op-80 {{ project?.description }}
      .flex-1
      .text-md.op-40.bg-dark-300.bg-op-40.flex.items-center(v-if="project?.events.length") Events: {{ project?.events.length }}

       
</template>