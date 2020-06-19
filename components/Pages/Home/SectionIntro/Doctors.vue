<style lang="scss" scoped>
.doctors {
  background-color: transparent;
  padding: 4px;
  border-radius: 10px;
  padding: 10px 0;
  margin-top: 30px;
  .swiper-slide {
    display: flex;
    justify-content: center;
    padding: 5px 0px;
  }
  .prev,
  .next {
    display: inline-flex;
  }
  .swiper-navigation {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .prev,
    .next {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 100%;
      margin: 0 6px;
      box-shadow: 0 2px 12px 0 rgba(19, 209, 243, 0.5);
    }
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
    <div class="swiper-navigation">
      <!--   <div class="next">
        <v-icon>iconName</v-icon>
      </div>
      <button @click="onShowNext" class="next">
        <Icon fileName="ic_arrow_right.png" />
      </button>
      <button @click="onShowBack" class="prev">
        <Icon fileName="ic_arrow_left.png" />
      </button>-->
      <div @click="onShowNext" class="next" slot="button-prev">
        <v-icon color="primary">la-arrow-right</v-icon>
      </div>
      <div @click="onShowBack" class="prev" slot="button-next">
        <v-icon color="primary">la-arrow-left</v-icon>
      </div>
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
    spaceBetween: 15,
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
      const { result } = await this.$service.doctors.getRelatedDoctors(1141, {
        limit: 12,
      })
      this.doctors = result.relatedDoctors
    } catch (error) {
      // console.log('Doctors -> fetch -> error', error)
    }
  }
}
</script>
