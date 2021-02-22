<style lang="scss" scoped>
.posts {
  padding: 32px 0;
}
.swiper-slide {
  width: auto;
}
</style>

<template>
  <div class="posts">
    <AppSkeleton v-if="loading" section="WeblogMobile" />
    <swiper ref="swiper" :options="swiperOptions" v-if="!loading">
      <swiper-slide v-for="(item, index) in post" :key="index">
        <Post :post="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Post from '../Post/Post.vue'

@Component({
  components: {
    Post,
  },
})
export default class WeblogMobile extends Vue {
  items: Object = []
  loading = true
  swiperOptions = {
    centeredSlides: true,
    spaceBetween: 5,
    slidesPerView: 'auto',
    loop: true,
    grabCursor: true,
  }
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
