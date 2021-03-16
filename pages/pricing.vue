<style lang="scss" scoped>
.pricing {
  @include media(sm) {
    padding: 0 79px;
  }
}
.faq-wrapper {
  padding: 24px;
  @include media(sm) {
    padding: 0;
  }
}
</style>

<template>
  <section class="pricing">
    <PricingTable />
    <Faq class="faq-wrapper" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PricingTable from '@/components/Pages/Pricing/PricingTable/PricingTable.vue'
import Faq from '@/components/Common/Faq/Faq.vue'

@Component({
  components: {
    PricingTable,
    Faq,
  },
})
export default class PricingPage extends Vue {}
</script>
