<style lang="scss" scoped>
.credit-wrapper {
  color: #212121;
  font-weight: 500;
  .credit {
    color: #f9a429;
  }
}
</style>

<template>
  <div class="credit-wrapper">
    <div class="d-flex justify-space-between">
      <div class="label">اعتبار حساب شما:</div>
      <div class="credit mx-2">‏0 تومان</div>
    </div>
    <p class="mt-4">
      برای برقراری تماس، لطفا یکی از بسته‌های زیر را انتخاب کنید.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CreditInfoMobile extends Vue {}
</script>
