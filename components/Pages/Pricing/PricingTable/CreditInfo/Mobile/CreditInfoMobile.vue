<style lang="scss" scoped>
.credit-wrapper {
  padding: 0 22px;
  .credit-text {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 500;
    color: #212121;
  }
  .credit {
    color: #f9a429;
    margin: 0 8px;
  }
  .make-call {
    font-size: 14px;
    color: #212121;
    font-weight: 500;
    margin-top: 13px;
    margin-bottom: 0;
    white-space: nowrap;
  }
}
</style>

<template>
  <div class="credit-wrapper">
    <div class="credit-text">
      <div class="label">اعتبار حساب شما:</div>
      <div class="credit">{{ '0' | persianDigit }}‏ تومان</div>
    </div>
    <p class="make-call">
      برای برقراری تماس، لطفا یکی از بسته‌های زیر را انتخاب کنید.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CreditInfoMobile extends Vue {}
</script>
