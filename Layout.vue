<script setup>
import { useData } from 'vitepress'

import { ref } from 'vue';

const { frontmatter: f, isDark } = useData()
</script>


<template lang="pug">
.flex.flex-wrap.items-stretch.w-full.justify-stretch.relative
  .h-12.sticky.top-0.z-100.py-2.px-4.bg-light-400.dark-bg-dark-400.dark-bg-op-80.w-full.shadow-lg.flex.flex-wrap.gap-2.items-center.bg-op-80.backdrop-blur
    .flex.gap-2.items-center.w-full
      a.font-bold.flex.gap-2.items-center(href="https://chromatone.center" target="_top") 
        img.w-6(src="/smooth.svg")
        .p-0 Chromatone 
      a.p-0(href="/") Projects
      .flex-1
      button.p-1.text-xl.-mt-2px(@click="isDark = !isDark", aria-label="Toggle dark mode")
        .i-carbon-moon(v-show="isDark")
        .i-carbon-sun(v-show="!isDark")
  content.flex-auto(:class="{ prose: f?.dynamic }")

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