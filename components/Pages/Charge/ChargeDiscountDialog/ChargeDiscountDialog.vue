<style lang="scss" scoped>
.v-card {
  width: 392px;
  height: 320px;
  border-radius: 8px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 29px 43px 24px;
  .text {
    padding: 10px 0 0;
    line-height: 25px;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
  }
  .discount {
    width: 100%;
  }
  .actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .resaa-btn {
      height: 36px;
      margin-right: 20px;
    }
  }
}
</style>

<template>
  <v-card>
    <v-icon size="76px"> la-percent </v-icon>
    <div class="text">
      لطفا کد تخفیف خود را وارد و سپس دکمه ثبت را انتخاب کنید.
    </div>
    <div class="discount">
      <v-text-field
        v-model="discount"
        class="mt-4"
        v-validate="{ required: true }"
        :error-messages="errors.collect('discount')"
        data-vv-as="کد تخفیف"
        name="discount"
        placeholder="کد تخفیف"
        outlined
      ></v-text-field>
    </div>
    <div class="actions">
      <v-btn text color="#13d1f3" @click="$emit('hide')">انصراف</v-btn>
      <v-btn class="resaa-btn" :disabled="!discount" @click="save"
        >ثبت کد تخفیف</v-btn
      >
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class DiscountDialog extends Vue {
  @Prop({
    type: Object,
  })
  readonly scope!: any
  discount = ''
  async save() {
    let valid = await this.$validator.validate()
    if (!valid) return
    try {
      let result = await this.$service.charge.validateDiscount({
        discountCode: this.discount,
        phoneNumber: this.scope.phoneNumber,
        amount: this.scope.denomination.amount,
      })
      if (result.isvalid) {
        this.$emit('hide', this.discount)
      } else {
        this.$toast.error().showSimple('کد تخفیف معتبر نمیباشد')
      }
    } catch (error) {
      this.$toast.error().showSimple('کد تخفیف معتبر نمیباشد')
    }
  }
}
</script>
