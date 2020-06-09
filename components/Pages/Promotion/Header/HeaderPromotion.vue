<style lang="scss" scoped>
.header {
  background: url('/images/promotion/header-bg.png') no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 140px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  line-height: 28px;
  @include media(sm) {
    font-size: 26px;
    height: 340px;
    line-height: 60px;
  }
  &::before {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
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
    <div class="main-title">لیست متخصصان مرتبط با نیاز شما</div>
    <div class="skill-desc">
      مشاوره با متخصصان زنان و زایمان
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import content from '../../../../@types/svg'

@Component
export default class HeaderPromotion extends Vue {}
</script>
