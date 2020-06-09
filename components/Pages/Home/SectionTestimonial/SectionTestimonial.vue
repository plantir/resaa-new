<style lang="scss" scoped>
.section-testimonial {
  background-color: #f9f9f9;
  padding: 60px 0;
  .testimonials {
    width: 100%;
    ::v-deep {
      .swiper-slide {
        padding-top: 50px !important;
        padding-bottom: 50px !important;
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
      <div class="title">{{ title }}</div>
    </v-container>
    <div class="testimonials mt-10">
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide v-for="(doctor, index) in 4" :key="index">
          <Testimonial />
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

  swiperOptions = {
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 3,
    slidesPerGroup: 1,
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
    },
    grabCursor: true,
  }

  get swiper() {
    return (this.$refs.swiper as any).$swiper
  }

  mounted() {
    this.swiper.slideTo(1, 1000)
  }
}
</script>
