<script setup>
import { createDirectus, rest, readItems, staticToken } from '@directus/sdk'
import { computed, onMounted, ref } from 'vue';
import { useDateFormat } from '@vueuse/core';
import { useRoute } from 'vitepress';
import YoutubeEmbed from '.vitepress/YoutubeEmbed.vue';

const props = defineProps({
  id: { type: String, default: '' }
})

const events = ref([])

onMounted(async () => {
  try {
    events.value = await createDirectus('https://db.chromatone.center/')
      .with(staticToken('HDqt6uvSbGyYnL4tdi3jntEHOj7i_aYp'))
      .with(rest())
      .request(readItems('events', {
        // sort: '-start_date',
        filter: {
          project: {
            id: {
              _eq: props.id
            }
          }
        },
        fields: ['*', 'title', 'description', 'cover.id', 'poster.id']
      }))
  } catch (e) {
    console.log('Projects fetch failed')
  }
})

const route = useRoute()

const sel = computed(() => route.hash && events.value.find(ev => ev.slug == route.hash.split('#')[1]))

</script>

<template lang='pug'>
.flex.mx-4.items-baseline.bg-light-800.dark-bg-dark-800.p-4(v-if="events.length" @click="route.hash = ''") 
  .text-3xl.font-bold Events 
  .flex-1 
  .text-2xl {{ sel ? '1/' : '' }}{{ events.length }} 
.flex.flex-wrap.gap-4.m-4(v-if="events.length")
  transition-group(name="fade")
    template(v-if="sel")
      .bg-light-800.dark-bg-dark-200.rounded-xl.shadow-lg.p-4.relative.flex.flex-col.gap-4()
        a.text-xl.absolute.top-4.right-4(href="#")
          .i-la-times
        img.w-full(style="flex: 1 1 200px;margin:0em" :src="`https://db.chromatone.center/assets/${sel?.cover?.id || sel?.poster?.id}?width=600`")
        .text-2xl.flex.items-baseline.gap-4 {{ sel?.title }}
        .text-lg.op-80.font-mono {{ useDateFormat(sel?.date, 'DD MMMM YYYY') }}
        .text-md {{ sel?.description }}

        .text-md.bg-light-900.dark-bg-dark-400.p-4.flex.flex-col.gap-4(v-if="sel?.announcement") {{ sel?.announcement }}

        youtube-embed(:video="sel?.youtube_video" v-if="sel?.youtube_video")

        .flex.flex-col.gap-4.my-4(v-if="sel?.schedule")
          .text-2xl.font-bold Schedule
          .p-2.bg-light-800.dark-bg-dark-600.font-mono.flex.flex-wrap.items-center.gap-2(v-for="act in sel?.schedule" :key="act") 
            .flex-0.text-sm {{ act?.time?.slice(0, 5) }}
            .flex-1.font-bold {{ act?.activity }}
            .flex-0.op-70.text-sm {{ act?.duration }}

        .text-md.max-w-45ch {{ sel?.content }}

        YoutubeEmbed(:video="sel?.livestream" v-if="sel?.livestream")


    template(v-else)
      a.no-underline.bg-light-700.shadow-lg.dark-bg-dark-200.flex.flex-wrap.gap-1(v-for="ev in events" :key="ev?.slug" :href="`#${ev?.slug}`" style="flex: 1 1 420px") 
        img.max-h-200px(style="flex: 1 1 200px;margin:.5em" :src="`https://db.chromatone.center/assets/${ev?.cover?.id || ev?.poster?.id}?width=200&height=200`")
        .flex.flex-col.p-2.gap-2(style="flex: 10 1 180px")
          .flex.items-baseline.flex-wrap.gap-2
            .text-2xl {{ ev?.title }}
            .text-sm.op-80.font-mono {{ useDateFormat(ev?.date, 'DD MMMM YYYY') }}
          .text-md {{ ev?.description }}
        
</template>