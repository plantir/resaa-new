<style lang="scss" scoped>
.result {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 32px;
  padding-bottom: 66px;
  .list {
    width: 100%;
  }
  .view-all {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-left: 40px;
    .doctor-title {
      font-size: 16px;
      font-weight: bold;
      color: #000000;
    }
    .more {
      .v-btn {
        font-size: 14px;
        font-weight: 500;
        a {
          color: #000000;
        }
      }
    }
  }
  .empty {
    padding: 40px 0 54px;
    width: 100%;
    @include media(sm) {
      padding: 80px 0 66px;
      width: 450px;
    }
    @include media(md) {
      width: 550px;
    }
    img {
      width: 100%;
    }
  }
  .item {
    height: 97px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.1);
  }
}
.swiper-container {
  padding: 0 0 30px;
}
</style>

<template>
  <div class="result">
    <div class="list" v-if="data.length > 0">
      <div class="view-all">
        <div class="doctor-title">{{ title }}</div>
        <div class="more">
          <!-- <v-btn text>
            <nuxt-link :to="link">
              مشاهده همه
              <v-icon color="#35d6c1" size="18">la-angle-left</v-icon>
            </nuxt-link>
          </v-btn> -->
        </div>
      </div>
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
    </div>
    <!-- <div class="empty" v-else>
      <img src="/images/home/skills.webp" />
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
  @Prop({
    type: String,
    required: true,
  })
  readonly type!: String
  swiperOptions = {
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 30,
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
  categoryLink(item: any) {
    return `/categories/${item.englishTitle.replace(/ /g, '-')}/${item.id}`
  }
}
</script>
