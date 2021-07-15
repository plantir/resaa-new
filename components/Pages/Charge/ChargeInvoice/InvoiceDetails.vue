<style lang="scss" scoped>
.preview {
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    border-bottom: 1px solid #ddd;
    align-items: center;
    div:last-child {
      font-weight: bold;
    }
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
    <div class="item">
      <div class="label">مبلغ شارژ</div>
      <div class="value price">
        {{ invoice.chargeDenomination.amount | currency | persianDigit }} تومان
      </div>
    </div>

    <div class="item">
      <div class="label">مبلغ تخفیف</div>
      <div class="value">
        {{ invoice.discountAmount | currency | persianDigit }} تومان
      </div>
    </div>
    <div class="item">
      <div class="label">مالیات</div>
      <div class="value">{{ invoice.tax | currency | persianDigit }} تومان</div>
    </div>

    <div class="item">
      <div class="label">مبلغ قابل پرداخت</div>
      <div class="value">
        {{ invoice.paymentAmount | currency | persianDigit }} تومان
      </div>
    </div>

    <div class="item">
      <div class="label">شماره موبایل</div>
      <div class="value ltr">{{ invoice.obfuscatedPhoneNumber }}</div>
    </div>

    <div class="item">
      <div class="label">تاریخ خرید</div>
      <div class="value">
        {{ invoice.issuedAt | persianDate('jYYYY/jMM/jDD') | persianDigit }}
      </div>
    </div>

    <div class="item">
      <div class="label">ساعت خرید</div>
      <div class="value">
        {{ invoice.issuedAt | persianDate('HH:mm') | persianDigit }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class InvoiceDetails extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly invoice!: Object
}
</script>
