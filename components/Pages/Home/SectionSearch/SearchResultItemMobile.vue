<style lang="scss" scoped>
.result {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  .list {
    width: 100%;
  }
  .result-title {
    font-size: 14px;
    font-weight: bold;
    line-height: 15px;
    color: #212121;
    margin: 44px 0 16px;
  }
  .view-all {
    margin: 56px 0 98px;
    border: 1px solid $primary-color;
    color: $primary-color;
    line-height: 48px;
    border-radius: 8px;
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  .empty {
    padding: 40px 0;
    @include media(sm) {
      width: 450px;
    }
    @include media(md) {
      width: 550px;
    }
    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="result">
    <div class="list" v-if="data.length > 0">
      <div class="result-title">{{ title }}</div>
      <Doctor v-for="item in data" :key="item.id" :doctor="item" />
      <nuxt-link class="view-all" :to="link"> مشاهده همه </nuxt-link>
    </div>
    <!-- <div class="empty mt-5" v-else>
      <img src="/images/home/skills.png" />
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Doctor from './Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class SearchResult extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  readonly data!: Array<object>
  @Prop({
    type: String,
    required: true,
  })
  readonly title!: String
  @Prop({
    type: String,
    required: true,
  })
  readonly link!: String
  swiperOptions = {
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1785: {
        slidesPerView: 5,
      },
    },
  }
}
</script>
