<script setup>
import { useData } from 'vitepress'

import { ref } from 'vue';


const { frontmatter: f } = useData()



</script>


<template lang="pug">
.flex.flex-wrap.items-stretch.w-full.justify-stretch.relative HELLO

  content.prose.max-w-unset.content.bg-light-300.z-10(style="flex: 1 1 100%")

  
</template>

<style lang="postcss">
.prose p,
.prose h1,
.prose h2,
.prose h3 {
  @apply m-4;
  max-width: 55ch;

}

.custom-block-title {
  display: none;
}

.tip {
  @apply p-2 m-2 bg-light-300 rounded-xl shadow max-w-55ch;
  flex: 1 1 360px;
}

.content>div {
  @apply flex flex-wrap items-start
}
</style>