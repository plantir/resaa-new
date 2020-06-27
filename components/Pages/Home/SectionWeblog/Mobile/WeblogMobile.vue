<style lang="scss" scoped>
.posts {
  padding: 40px 0;
}
</style>

<template>
  <div class="posts mt-8">
    <AppSkeleton v-if="loading" section="WeblogMobile" />

    <swiper ref="swiper" v-if="!loading">
      <swiper-slide v-for="(doctor, index) in 4" :key="index">
        <Post :post="post" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '../Post/Post.vue'
// import AppSkeleton from '@/components/Common/AppSkeleton/AppSkeleton.vue'

@Component({
  components: {
    Post,
    // AppSkeleton,
  },
})
export default class WeblogMobile extends Vue {
  post = {}
  loading = true
}
</script>
