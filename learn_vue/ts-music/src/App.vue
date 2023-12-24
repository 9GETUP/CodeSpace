<script setup lang="ts">

import { onMounted,toRefs } from 'vue';
import { usePersonalizedStore } from './store/personalized';
import Banner from './components/Banner.vue';



const { personalizedMv } = toRefs(usePersonalizedStore())
const { getPersonalized} = usePersonalizedStore()

onMounted(async () => {
  await getPersonalized()
}) 
</script>

<template>
  <div>
    <Banner />
    <!-- <ul>
    <li v-for="banner in banners" :key="banner.targetId">
      <img :src="banner.pic" alt="">
    </li>
  </ul> -->
  <ul>
    <li v-for="mv in personalizedMv" :key="mv.id">
      <img :src="mv.picUrl">
    </li>
  </ul>
  </div>
</template>

<style scoped>

</style>
