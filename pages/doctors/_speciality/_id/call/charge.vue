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
    <PricingTable :packages="packages" />
    <Faq class="faq-wrapper" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PricingTable from '@/components/Pages/Pricing/PricingTable/PricingTable.vue'
import Faq from '@/components/Common/Faq/Faq.vue'

@Component({
  components: {
    PricingTable,
    Faq,
  },
})
export default class PricingPage extends Vue {
  packages = []

  async mounted() {
    let { result } = await this.$service.doctors.get(this.$route.params.id)
    this.packages = await this.$service.doctors.getCharges(result.doctor.id)
  }
}
</script>
