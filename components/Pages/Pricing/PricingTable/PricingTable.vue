<style lang="scss" scoped></style>

<template>
  <section>
    <CreditInfoMobile v-if="$device.isMobile" />
    <CreditInfoDesktop v-else />

    <PackagesMobile v-if="$device.isMobile" :packages="packages" />
    <PackagesDesktop v-else :packages="packages" />
    <!-- append -->
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    CreditInfoMobile: () => import('./CreditInfo/Mobile/CreditInfoMobile.vue'),
    CreditInfoDesktop: () =>
      import('./CreditInfo/Desktop/CreditInfoDesktop.vue'),
    PackagesMobile: () => import('./Packages/Mobile/PackagesMobile.vue'),
    PackagesDesktop: () => import('./Packages/Desktop/PackagesDesktop.vue'),
  },
})
export default class PricingTable extends Vue {
  packages = [
    {
      color: '#35d6c1',
      count: 3,
      name: 'تماس کوتاه',
      title: '۳ دقیقه مکامله',
      desc: ' مناسب برای پرسش و دریافت پاسخ ۲ سوال کوتاه',
      price: 9000,
    },
    {
      color: '#0bbad9',
      count: 3,
      name: 'تماس کوتاه',
      title: '۳ دقیقه مکامله',
      desc: ' مناسب برای پرسش و دریافت پاسخ ۲ سوال کوتاه',
      price: 9000,
    },
    {
      color: '#f9a429',
      count: 3,
      name: 'تماس کوتاه',
      title: '۳ دقیقه مکامله',
      desc: ' مناسب برای پرسش و دریافت پاسخ ۲ سوال کوتاه',
      price: 9000,
    },
    {
      color: '#c73260',
      count: 3,
      name: 'تماس کوتاه',
      title: '۳ دقیقه مکامله',
      desc: ' مناسب برای پرسش و دریافت پاسخ ۲ سوال کوتاه',
      price: 9000,
    },
  ]
}
</script>
