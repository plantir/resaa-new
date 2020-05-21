<style lang="scss" scoped>
.doctors {
  background-color: transparent;
  padding: 4px;
  border-radius: 10px;
  margin-top: -80px;
  padding: 10px 0;
  ::v-deep {
    .slick-list {
      padding-top: 10px !important;
      padding-bottom: 10px !important;
    }
    .slick-slide {
      cursor: grab;
      &:active {
        cursor: grabbing;
      }
    }
  }
}
</style>

<template>
  <div class="doctors">
    <client-only>
      <VueSlickCarousel v-bind="slickOptions" ref="carousel">
        <Doctor
          v-for="(doctor, index) in doctors"
          :key="index"
          :doctor="doctor"
        />
      </VueSlickCarousel>
    </client-only>
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

Component.registerHooks(['fetch'])

@Component({
  components: {
    Doctor,
    Icon,
  },
})
export default class Doctors extends Vue {
  slickOptions = {
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 6,
    rtl: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '105px',
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  doctors = []

  onShowNext() {
    this.$refs.carousel.next()
  }

  onShowBack() {
    this.$refs.carousel.prev()
  }

  async fetch() {
    try {
      const { result } = await this.$axios.$get(
        '/categories/8/RelatedDoctors',
        {
          params: {
            limit: 12,
          },
        }
      )
      this.doctors = result.relatedDoctors
    } catch (error) {
      console.log('Doctors -> fetch -> error', error)
    }
  }
}
</script>
