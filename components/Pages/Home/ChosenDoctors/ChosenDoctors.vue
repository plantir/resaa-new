<style lang="scss" scoped>
.wrapper {
  background-color: transparent;
  padding: 0 16px 40px;
  @include media(sm) {
    font-size: 24px;
    padding: 0 32px 60px;
  }
  .wrapper-title {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 13px;
  }
}

// .swiper-slide {
//   display: flex;
//   justify-content: center;
//   padding: 5px 0px;
// }

.swiper-container {
  padding: 10px 0;
}
</style>

<template>
  <section>
    <div class="wrapper">
      <div class="wrapper-title">
        {{ title }}
      </div>
      <swiper ref="swiper" :options="swiperOptions" v-show="!loading">
        <swiper-slide v-for="doctor in doctors" :key="doctor.subscriberNumber">
          <Doctor :doctor="doctor" />
        </swiper-slide>
      </swiper>
      <swiper :options="swiperOptions" v-show="loading">
        <swiper-slide v-for="index in 15" :key="index">
          <AppSkeleton section="DoctorSwiper" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Doctor from './Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class Doctors extends Vue {
  @Prop()
  doctors!: []

  @Prop({
    type: Boolean,
    required: true,
  })
  readonly loading!: Boolean
  @Prop({
    type: String,
  })
  readonly title!: String
  swiperOptions = {
    // centeredSlides: true,
    spaceBetween: 15,
    slidesPerView: 2,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 150,
      },
      1785: {
        slidesPerView: 8,
      },
    },
    grabCursor: true,
  }

  onShowNext() {
    this.swiper.slideNext(1000)
  }

  onShowBack() {
    this.swiper.slidePrev(1000)
  }

  get swiper() {
    return (this.$refs.swiper as any)?.$swiper
  }

  mounted() {
    this.swiper.slideTo(4, 1000, false)
  }
}
</script>
