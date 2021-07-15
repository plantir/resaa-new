<style lang="scss" scoped></style>

<template>
  <v-select
    v-model="selectedCharge"
    :items="chargeMenuItems"
    :loading="loading"
    :disabled="loading || disabled"
    :error-messages="errorMessages"
    placeholder="مقدار شارژ"
    cache-items
    outlined
    return-object
  >
    <template v-slot:selection="{ item }">
      <span class="label">کارت شارژ</span>
      <span class="amount px-2">
        {{ item.amount | currency | persianDigit }}
      </span>
      <span class="label">تومانی</span>
    </template>
    <template v-slot:item="{ item }">
      <span class="label">کارت شارژ</span>
      <span class="amount px-2">
        {{ item.amount | currency | persianDigit }}
      </span>
      <span class="label">تومانی</span>
    </template>
  </v-select>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { ChargeMenuItem } from '@/models/Charge'

@Component
export default class DenominationSelect extends Vue {
  @Prop({
    required: true,
  })
  readonly value!: String

  @Prop({
    type: Array,
  })
  readonly errorMessages!: Array<string>

  @Prop({
    type: Boolean,
  })
  readonly disabled!: Boolean

  get selectedCharge() {
    return this.value
  }
  set selectedCharge(val) {
    this.$emit('input', val)
  }

  chargeMenuItems: any[] = []
  loading: boolean = false

  async getChargeMenu() {
    try {
      this.loading = true
      const { result } = await this.$service.charge.getChargeMenu()
      if (result.denominations.length > 0) {
        this.chargeMenuItems = result.denominations
          .filter((item) => {
            return (
              item.amount == 10000 ||
              item.amount == 20000 ||
              item.amount == 30000 ||
              item.amount == 40000 ||
              item.amount == 50000
            )
          })
          .sort((a, b) => a.amount - b.amount)
          .map((item) => {
            return item
          })
      }
      this.loading = false
    } catch (error) {
      this.loading = false
    }
  }

  mounted() {
    this.getChargeMenu()
  }
}
</script>
