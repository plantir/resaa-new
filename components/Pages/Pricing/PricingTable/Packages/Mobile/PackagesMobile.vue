<style lang="scss" scoped>
.packages {
  ::v-deep {
    .swiper-container {
      padding: 20px 0;
    }
    .swiper-slide {
      width: 192px;
    }
  }
}
.colorful-circle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 39px 0 0;
  padding: 0 24px;
  .circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .active {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>

<template>
  <section>
    <div class="packages d-flex justify-space-between">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in packages" :key="index">
          <Package
            :key="index"
            :color="colors[index]"
            :count="item.chargePackage.durationInMinute"
            :name="item.chargePackage.packageTitle"
            :title="`${item.chargePackage.durationInMinute} دقیقه مکالمه`"
            :desc="item.chargePackage.description"
            :price="item.denomination.amount"
            @click="onClick"
          />
        </swiper-slide>
      </swiper>
    </div>
    <div class="colorful-circle">
      <div
        class="circle"
        v-for="(color, index) in packages"
        :key="index"
        :class="{ active: isActive == index }"
        :style="{ backgroundColor: color.color }"
        @click="setActive(index)"
      ></div>
    </div>
  </section>
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
  colors = ['#35d6c1', '#0bbad9', '#f9a429', '#c73260']
  @Prop({
    type: Array,
    required: true,
  })
  readonly packages!: Array<Object>
  isActive = 0
  get swiper() {
    return (this.$refs.swiper as any).$swiper
  }

  async mounted() {
    this.swiper.slideTo(1, 1000)
  }
  setActive(index: any) {
    console.log(index)
    this.isActive = index
    console.log(this.isActive)
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
