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
  packages: any = []
  async mounted() {
    this.packages = await this.$service.pricing.query()
  }
}
</script>
