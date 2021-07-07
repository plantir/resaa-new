<style lang="scss" scoped>
.doctors {
  background-color: transparent;
  margin-top: -30px;
  @include media(sm) {
    padding: 10px 0;
    margin-top: 15px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    padding: 5px 0px;
  }

  .swiper-container {
    padding: 10px 0;
  }
  .nav {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .prev,
    .next {
      display: inline-flex;
    }
    .prev,
    .next {
      box-shadow: 0 2px 12px 0 rgba(19, 209, 243, 0.5);
      background-color: #ffffff;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 100%;
      margin: 0 6px;
      width: 40px;
      height: 40px;
      z-index: 1;
    }
  }
}
</style>

<template>
  <div class="doctors">
    <swiper ref="swiper" :options="swiperOptions" v-show="!loading">
      <swiper-slide v-for="doctor in doctors" :key="doctor.subscriberNumber">
        <Doctor :doctor="doctor" />
      </swiper-slide>
    </swiper>
    <swiper :options="swiperOptions" v-show="loading">
      <swiper-slide v-for="index in 8" :key="index">
        <AppSkeleton section="DoctorSwiper" />
      </swiper-slide>
    </swiper>
    <div class="nav d-flex justify-center" v-if="!loading">
      <div @click="onShowNext" class="next" slot="prev">
        <v-icon color="primary">la-arrow-right</v-icon>
      </div>
      <div @click="onShowBack" class="prev" slot="next">
        <v-icon color="primary">la-arrow-left</v-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'
import Doctor from './Doctor.vue'
import { RelatedDoctor } from '~/models/Doctor'

@Component({
  components: {
    Doctor,
    Icon,
  },
})
export default class Doctors extends Vue {
  swiperOptions = {
    centeredSlides: this.$device.isMobile,
    spaceBetween: 15,
    slidesPerView: 2,
    slidesPerGroup: 1,
    grabCursor: true,
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
  }
  @Prop()
  doctors!: RelatedDoctor[]

  @Prop({
    type: Boolean,
    required: true,
  })
  readonly loading!: Boolean

  get swiper() {
    return (this.$refs.swiper as any)?.$swiper
  }
  onShowNext() {
    this.swiper.slideNext(1000)
  }

  onShowBack() {
    this.swiper.slidePrev(1000)
  }

  mounted() {
    this.swiper.slideTo(4, 1000, false)
  }
}
</script>
