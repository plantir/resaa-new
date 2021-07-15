<style lang="scss" scoped>
.charge-wrapper {
  height: calc(100vh - 94px);
  padding: 0 24px;
  margin-top: -48px;
  @include media(sm) {
    padding: 0;
    margin-top: 0;
  }
  .background-top {
    ::v-deep {
      .bottom-background {
        top: 50px;
        clip-path: ellipse(200% 100% at 100% 50%);
        height: 180px !important;
      }
    }
  }
}
</style>
<template>
  <div class="charge-wrapper" align-center d-flex justify-center>
    <div class="background-top" v-if="$device.isMobile">
      <BottomBackground height="320" />
    </div>
    <ChargeForm v-if="!invoice" @submit="onPreInvoice" :loading="loading" />
    <ChargeInvoice v-else :invoice="invoice" @submit="onGoToPayment" />
    <BottomBackground height="320" v-if="$device.isDesktopOrTablet" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import ChargeForm from '@/components/Pages/Charge/ChargeForm/ChargeForm.vue'
import ChargeInvoice from '@/components/Pages/Charge/ChargeInvoice/ChargeInvoice.vue'
import BottomBackground from '@/components/Common/BottomBackground/BottomBackground.vue'
import { ResultInvoice } from '@/models/Charge'

Component.registerHooks(['fetch', 'head'])

@Component({
  layout: 'withoutFooter',
  components: {
    ChargeForm,
    ChargeInvoice,
    BottomBackground,
  },
})
export default class ChargePage extends Vue {
  invoice: ResultInvoice | null = null
  loading: boolean = false

  public head() {
    return {
      title: 'افزایش اعتبار حساب برای تماس با پزشک',
      bodyAttrs: {
        class: 'page-charge',
      },
    }
  }

  async onPreInvoice(form: any) {
    try {
      this.loading = true
      const { result } = await this.$service.charge.getPreInvoice({
        discountCode: form.discountCode,
        phoneNumber: form.phoneNumber,
        denominationId: form.denomination.id,
        callbackUrl: process.env.BANK_RETURN_URL,
      })
      this.invoice = result
      this.loading = false
    } catch (error) {
      this.loading = false
    }
  }

  onGoToPayment() {
    if (this.invoice) {
      const form = document.createElement('form')
      form.method = 'POST'
      form.action = this.invoice.gateWay.address
      const input = document.createElement('input')
      input.value = this.invoice.gateWay.submissionParameters.token
      input.name = 'token'
      form.appendChild(input)
      document.body.appendChild(form)
      form.submit()
    }
  }
}
</script>
