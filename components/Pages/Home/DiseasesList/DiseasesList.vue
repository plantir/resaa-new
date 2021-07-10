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
.swiper-container {
  padding: 10px 0;
  .swiper-slide {
    width: auto !important;
  }
}
.card-specialtie {
  .v-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 96px;
    @include media(sm) {
      width: 150px;
      height: 150px;
    }
  }
  h2 {
    font-size: 12px;
    padding: 0 8px;
    text-align: center;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    @include media(sm) {
      font-size: 16px;
    }
  }
}
</style>

<template>
  <section>
    <div class="wrapper">
      <div class="wrapper-title">بیماری ها</div>
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide v-for="doctor in 10" :key="doctor.subscriberNumber">
          <nuxt-link to="/" class="card-specialtie">
            <v-card>
              <Icon fileName="ic_pregnancy.png" />
              <h2>سرما خوردگی</h2>
            </v-card>
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class Doctors extends Vue {
  swiperOptions = {
    spaceBetween: 15,
    slidesPerView: 'auto',
    loop: true,
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

  onShowNext() {
    this.swiper.slideNext(1000)
  }

  onShowBack() {
    this.swiper.slidePrev(1000)
  }

  get swiper() {
    return (this.$refs.swiper as any).$swiper
  }

  mounted() {
    this.swiper.slideTo(4, 1000, false)
  }
}
</script>
