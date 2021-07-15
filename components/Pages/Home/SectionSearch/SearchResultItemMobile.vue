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
    width: 100%;
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
.item {
  height: 97px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}
.swiper-container {
  padding: 30px 10px 30px;
}
</style>

<template>
  <div class="result">
    <div class="list" v-if="data.length > 0">
      <div class="result-title">{{ title }}</div>
      <swiper ref="swiper" :options="swiperOptions">
        <swiper-slide v-for="item in data" :key="item.id">
          <Doctor :doctor="item" v-if="type == 'doctor'" />
          <template v-else>
            <div class="item primary--text">
              <nuxt-link :to="categoryLink(item)" class="pa-4">
                {{ item.title }}
              </nuxt-link>
            </div>
          </template>
        </swiper-slide>
      </swiper>
      <!-- <nuxt-link class="view-all" :to="link"> مشاهده همه </nuxt-link> -->
    </div>
    <!-- <div class="empty mt-5" v-else>
      <img src="/images/home/skills.webp" />
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
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
  @Prop({
    type: String,
    required: true,
  })
  readonly type!: String

  get swiperOptions() {
    return {
      grabCursor: true,
      slidesPerView: this.type == 'doctor' ? 1 : 2,
      spaceBetween: 20,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
    }
  }
  categoryLink(item: any) {
    let name = item.englishTitle || ''
    return `/categories/${name.replace(/ /g, '-')}/${item.id}`
  }
}
</script>
