<style lang="scss" scoped>
.posts {
  ::v-deep {
    .slick-list {
      padding-top: 15px !important;
      padding-bottom: 15px !important;
    }
  }
}
</style>

<template>
  <div class="posts mt-3">
    <VueSlickCarousel v-bind="slickOptions" ref="carousel">
      <Post :post="post" v-for="(item, index) in 4" :key="index" />
    </VueSlickCarousel>
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

  slickOptions = {
    centerMode: true,
    focusOnSelect: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    rtl: true,
    arrows: false,
    infinite: false,
    centerPadding: '0px',
  }
}
</script>
