<style lang="scss" scoped>
.packages {
  ::v-deep {
    .swiper-container {
      padding: 20px 0;
    }
    .swiper-slide {
      // width: 70%;
      width: 192px;
    }
  }
}
</style>

<template>
  <div class="packages d-flex justify-space-between">
    <swiper ref="swiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in packages" :key="index">
        <Package
          :color="item.color"
          :count="item.count"
          :name="item.name"
          :title="item.title"
          :desc="item.desc"
          :price="item.price"
          @click="onClick"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Package from '../Package/Package.vue'

@Component({
  components: {
    Package,
  },
})
export default class PackagesMobile extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  readonly packages!: Array<Object>
  get swiper() {
    return (this.$refs.swiper as any).$swiper
  }

  async mounted() {
    this.swiper.slideTo(1, 1000)
  }
  swiperOptions = {
    centeredSlides: true,
    spaceBetween: 50,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
    },
    grabCursor: true,
  }

  onClick() {
    alert('a')
  }
}
</script>
