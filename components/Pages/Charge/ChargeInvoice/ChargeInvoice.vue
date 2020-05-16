<style lang="scss" scoped>
.charge-invoice {
  position: relative;
  width: 400px;
  z-index: 1;
  @include media(xs-only) {
    width: 100%;
  }
}
</style>

<template>
  <div class="charge-invoice">
    <v-card class="pa-4">
      <HeaderCharge>
        <h3 class="font-weight-bold text-center">پیش فاکتور</h3>
      </HeaderCharge>

      <InvoiceDetails :invoice="invoice.electronicPaymentVoucher" />

      <v-btn block @click="onSubmit">تایید و ادامه</v-btn>
    </v-card>

    <ChargeHelpBlock class="mt-4" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import HeaderCharge from '../HeaderCharge/HeaderCharge.vue'
import InvoiceDetails from './InvoiceDetails.vue'
import ChargeHelpBlock from '../ChargeHelpBlock/ChargeHelpBlock.vue'
import { ResultInvoice } from '@/models/Charge'

@Component({
  components: {
    HeaderCharge,
    InvoiceDetails,
    ChargeHelpBlock,
  },
})
export default class ChargeInvoice extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly invoice!: ResultInvoice

  onSubmit() {
    this.$emit('submit')
  }
}
</script>
