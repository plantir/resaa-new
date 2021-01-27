<style lang="scss" scoped>
.posts {
  padding: 32px 0;
}
</style>

<template>
  <div class="posts">
    <AppSkeleton v-if="loading" section="WeblogMobile" />

    <swiper ref="swiper" v-if="!loading">
      <swiper-slide v-for="(item, index) in post" :key="index">
        <Post :post="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Post from '../Post/Post.vue'
// import AppSkeleton from '@/components/Common/AppSkeleton/AppSkeleton.vue'

@Component({
  components: {
    Post,
    // AppSkeleton,
  },
})
export default class WeblogMobile extends Vue {
  items: Object = []
  loading = true
  @Prop({
    required: true,
  })
  readonly posts!: Array<Object>
  get post() {
    return this.posts.map((items: any) => {
      return {
        title: items.title.rendered,
        link: items.link,
        description: items.excerpt.rendered,
      }
    })
  }
  async mounted() {
    this.loading = false
  }
}
</script>
