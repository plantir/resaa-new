<style lang="scss" scoped>
.posts {
}
</style>

<template>
  <div class="posts mt-8">
    <swiper ref="swiper">
      <swiper-slide v-for="(doctor, index) in 4" :key="index">
        <Post :post="post" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '../Post/Post.vue'

@Component({
  components: {
    Post,
  },
})
export default class WeblogMobile extends Vue {
  post = {}
}
</script>
