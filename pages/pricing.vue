<style lang="scss" scoped>
.faq-wrapper {
  margin-top: 100px;
}
</style>

<template>
  <v-container>
    <PricingTable />
    <Faq class="faq-wrapper" />
  </v-container>
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
