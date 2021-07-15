<style lang="scss" scoped>
.header {
  // background: url('/images/promotion/header-bg.png') no-repeat;
  // background-position: center;
  // background-size: cover;
  position: relative;
  width: 100%;
  height: 140px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  line-height: 28px;
  overflow: hidden;
  @include media(sm) {
    font-size: 26px;
    height: 340px;
    line-height: 60px;
  }
  &::after {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
  }
  .skill-desc {
    font-size: 14px;
    @include media(sm) {
      font-size: 32px;
    }
  }
  .v-image {
    position: absolute;
  }
  .main-title {
    font-size: 12px;
    @include media(sm) {
      font-size: 26px;
    }
  }
  .skill-desc,
  .main-title {
    position: relative;
    z-index: 1;
  }
}
</style>

<template>
  <div class="header d-flex flex-column align-center justify-center">
    {{ backgroundImage }}
    <v-img
      width="100%"
      height="100%"
      :src="backgroundImage"
      :alt="category.pageHeaderTitle"
    />

    <span class="main-title">لیست متخصصان مرتبط با نیاز شما</span>
    <h1 class="skill-desc">{{ category.pageHeaderTitle }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class HeaderPromotion extends Vue {
  @Prop()
  category!: any

  get backgroundImage() {
    let prefix = '/api/'
    let imageUrl = this.$device.isDesktop
      ? this.category.backgroundImagePath
      : this.category.mobileBackgroundImagePath
    return prefix + imageUrl
  }
}
</script>
