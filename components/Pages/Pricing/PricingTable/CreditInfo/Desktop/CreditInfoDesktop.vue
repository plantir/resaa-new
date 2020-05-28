<style lang="scss" scoped>
.credit-wrapper {
  color: #212121;
  font-weight: 500;
  span {
    color: #f9a429;
  }
}
</style>

<template>
  <div class="credit-wrapper text-center">
    <p>
      اعتبار حساب شما
      <span class="credit mx-2">‏0 تومان</span>
      است و برای تماس با خانم دکتر ملکی کافی نیست.
    </p>
    <p>
      برای افزایش اعتبار حسابتان، لطفا یکی از بسته های زیر را انتخاب کنید.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CreditInfoDesktop extends Vue {}
</script>
