<style lang="scss" scoped>
.doctors {
  background-color: transparent;
  padding: 4px;
  border-radius: 10px;
  margin-top: -80px;
  padding: 10px 0;
  .swiper-slide {
    display: flex;
    justify-content: center;
    padding: 5px 0px;
  }
  .nav {
    margin-top: 20px;
  }
}
</style>

<template>
  <div class="doctors">
    <swiper ref="swiper" :options="swiperOptions">
      <swiper-slide v-for="doctor in doctors" :key="doctor.subscriberNumber">
        <Doctor :doctor="doctor" />
      </swiper-slide>
    </swiper>
    <div class="nav d-flex justify-center">
      <button @click="onShowNext" class="next">
        <Icon fileName="ic_arrow_right.png" />
      </button>
      <button @click="onShowBack" class="prev">
        <Icon fileName="ic_arrow_left.png" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'
import Doctor from './Doctor.vue'
import { RelatedDoctor } from '../../../../models/Doctor'

Component.registerHooks(['fetch'])

@Component({
  components: {
    Doctor,
    Icon,
  },
})
export default class Doctors extends Vue {
  swiperOptions = {
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 2,
    slidesPerGroup: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 6,
      },
      1785: {
        slidesPerView: 8,
      },
    },
    grabCursor: true,
  }

  doctors: RelatedDoctor[] = []

  onShowNext() {
    this.swiper.slideNext(1000)
  }

  onShowBack() {
    this.swiper.slidePrev(1000)
  }

  get swiper() {
    return (this.$refs.swiper as any).$swiper
  }

  async fetch() {
    try {
      const { result } = await this.$service.doctor.getRelatedDoctors(8, {
        limit: 12,
      })
      this.doctors = result.relatedDoctors
    } catch (error) {
      // console.log('Doctors -> fetch -> error', error)
    }
  }
}
</script>
