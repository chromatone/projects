<script setup>
import { useData } from 'vitepress'

import { ref } from 'vue';

const { frontmatter: f } = useData()
</script>


<template lang="pug">
.flex.flex-wrap.items-stretch.w-full.justify-stretch.relative
  content(:class="{ prose: f?.dynamic }")

</template>

<style lang="postcss">
.prose p,
.prose h1,
.prose h2,
.prose h3 {
  @apply m-4;
}

@view-transition {
  navigation: auto;
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