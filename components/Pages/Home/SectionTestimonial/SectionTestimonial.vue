<style lang="scss" scoped>
.section-testimonial {
  background-color: #f9f9f9;
  padding: 60px 0;
  .testimonials {
    width: 100%;
    ::v-deep {
      .slick-list {
        padding-top: 50px !important;
        padding-bottom: 50px !important;
      }
      .slick-dots {
        list-style: none;
        text-align: center;
        direction: rtl;
        li {
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
          &.slick-active {
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
      .slick-slide.slick-center.slick-current {
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
      <div class="title">نتیجه استفاده از رسا را از کاربران ما بشنوید</div>
    </v-container>
    <div class="testimonials mt-10">
      <client-only>
        <VueSlickCarousel v-bind="slickOptions" ref="carousel">
          <Testimonial v-for="(item, index) in 4" :key="index" />
        </VueSlickCarousel>
      </client-only>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Testimonial from './Testimonial.vue'

@Component({
  components: {
    Testimonial,
  },
})
export default class SectionTestimonial extends Vue {
  slickOptions = {
    centerMode: true,
    focusOnSelect: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    rtl: true,
    dots: true,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
}
</script>
