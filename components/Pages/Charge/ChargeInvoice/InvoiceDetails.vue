<style lang="scss" scoped>
.preview {
  .item {
    font-weight: bold;
    border-bottom: 1px solid #ddd;
    line-height: 50px;
    &:last-child {
      border-bottom: none;
    }
  }
  .value.price {
    color: #f9a429;
  }
}
</style>

<template>
  <div class="preview d-flex flex-column my-5">
    <div class="item d-flex justify-space-between">
      <div class="label">مبلغ شارژ</div>
      <div class="value price">
        {{ invoice.chargeDenomination.amount | currency | persianDigit }} تومان
      </div>
    </div>

    <div class="item d-flex justify-space-between">
      <div class="label">کد رسا</div>
      <div class="value">{{ invoice.subscriberNumber | persianDigit }}</div>
    </div>

    <div class="item d-flex justify-space-between">
      <div class="label">شماره موبایل</div>
      <div class="value ltr">{{ invoice.obfuscatedPhoneNumber }}</div>
    </div>

    <div class="item d-flex justify-space-between">
      <div class="label">تاریخ خرید</div>
      <div class="value">
        {{ invoice.issuedAt | persianDate('jYYYY/jMM/jDD') | persianDigit }}
      </div>
    </div>

    <div class="item d-flex justify-space-between">
      <div class="label">ساعت خرید</div>
      <div class="value">
        {{ invoice.issuedAt | persianDate('HH:mm') | persianDigit }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class InvoiceDetails extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly invoice!: Object
}
</script>
