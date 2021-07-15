<style lang="scss" scoped>
.credit-wrapper {
  color: #212121;
  font-size: 16px;
  font-weight: 500;
  margin-top: 32px;
  span {
    color: #f9a429;
    margin: 0 8px;
  }
}
</style>

<template>
  <div class="credit-wrapper text-center">
    <p>
      اعتبار حساب شما
      <span>{{ '0' | persianDigit }} تومان</span>
      است و برای تماس با خانم دکتر ملکی کافی نیست.
    </p>
    <p>برای افزایش اعتبار حسابتان، لطفا یکی از بسته های زیر را انتخاب کنید.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CreditInfoDesktop extends Vue {}
</script>
