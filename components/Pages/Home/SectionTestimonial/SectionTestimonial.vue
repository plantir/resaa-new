<style lang="scss" scoped>
.section-testimonial {
  background-color: #f9f9f9;
  padding: 48px 0;
  @include media(sm) {
    padding: 75px 0;
  }
  .testimonials-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    @include media(sm) {
      font-size: 24px;
    }
  }
  .testimonials {
    width: 100%;
    ::v-deep {
      .swiper-slide {
        padding-top: 88px !important;
        padding-bottom: 50px !important;
        @include media(sm) {
          padding-top: 40px !important;
          padding-bottom: 80px !important;
        }
      }
      .swiper-pagination-bullets {
        list-style: none;
        text-align: center;
        direction: rtl;
        .swiper-pagination-bullet {
          display: inline-block;
          height: 4px;
          width: 60px;
          border-radius: 4px;
          background-color: #d9d9d9;
          margin-left: 10px;
          transition: all 0.35s ease-in;
          opacity: 0.7;
          @include media(xs-only) {
            width: 4px;
          }
          cursor: pointer;
          &.swiper-pagination-bullet-active {
            background-color: #20d3ef;
            @include media(xs-only) {
              width: 17px;
            }
          }
          button {
            display: none;
          }
        }
      }
      .swiper-slide.swiper-slide-active {
        .testimonial {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
}
</style>

<template>
  <section class="section-testimonial">
    <v-container class="d-flex flex-column align-center">
      <div class="testimonials-title">{{ title }}</div>
    </v-container>

    <div class="testimonials" v-if="loading">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(doctor, index) in testimonial.length"
          :key="index"
        >
          <AppSkeleton section="Testimonial" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="testimonials" v-if="!loading">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide v-for="(testimonial, index) in testimonial" :key="index">
          <Testimonial :content="testimonial" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Testimonial from './Testimonial.vue'

@Component({
  components: {
    Testimonial,
  },
})
export default class SectionTestimonial extends Vue {
  @Prop({
    type: String,
    default: 'نتیجه استفاده از رسا را از کاربران ما بشنوید',
  })
  title!: String

  loading = true
  testimonial: Array<object> = []
  swiperOptions = {
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    grabCursor: true,
  }

  get swiper() {
    return (this.$refs.swiper as any).$swiper
  }

  async mounted() {
    this.swiper.slideTo(2, 1000)
    this.testimonial = await this.$service.testimonials.getTestimonials()
    this.loading = false
  }
}
</script>
