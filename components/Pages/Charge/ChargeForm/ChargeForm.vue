<style lang="scss" scoped>
.charge-form {
  position: relative;
  z-index: 1;
  margin-top: 32px;
  @include media(sm) {
    width: 400px;
    padding: 0;
    margin: 40px auto 0;
  }
  .v-card {
    padding: 32px 24px;
    border-radius: 8px !important;
  }
  .discount {
    font-size: 14px;
    font-weight: 500;
    color: #35d6c1;
    padding-right: 0 !important;
  }
  .form {
    ::v-deep {
      .v-input__slot {
        min-height: 40px;
        @include media(sm) {
          min-height: 56px;
        }
        .v-select__selections {
          padding: 0 !important;
          @include media(sm) {
            padding: 8px 0 !important;
          }
        }
      }
      .v-input__append-inner {
        margin-top: 8px;
        @include media(sm) {
          margin-top: 17px;
        }
      }
    }
  }
  .resaa-btn {
    width: 263px;
    height: 36px;
    margin-top: 10px;
    @include media(sm) {
      width: 348px;
      height: 48px;
      margin-top: 20px;
    }
  }
  @include media(xs-only) {
    width: 100%;
  }
}
</style>

<template>
  <div class="charge-form">
    <v-card :loading="loading">
      <HeaderCharge>
        <p>
          به‌منظور افزایش اعتبار، شماره موبایل خود را وارد و مقدار شارژ‌را
          انتخاب کنید.
        </p>
      </HeaderCharge>

      <form @submit.prevent="onSubmit" class="form">
        <v-text-field
          v-model="form.phoneNumber"
          :error-messages="errors.collect('phoneNumber')"
          :disabled="loading"
          placeholder="شماره موبایل"
          name="phoneNumber"
          v-validate="'required|mobile'"
          data-vv-as="موبایل"
          outlined
        />

        <!-- <ToggleDoctor v-model="hasDoctorName" />

        <v-text-field
          v-if="hasDoctorName"
          v-model="form.fullNameDoctor"
          :error-messages="errors.collect('fullNameDoctor')"
          :disabled="loading"
          class="mt-4"
          placeholder="نام و نام خانوادگی پزشک"
          name="fullNameDoctor"
          v-validate="'required'"
          data-vv-as="نام و نام خانوادگی پزشک"
          outlined
        /> -->
        <DenominationSelect
          v-model="form.denomination"
          :error-messages="errors.collect('denominationId')"
          :disabled="loading"
          name="denominationId"
          v-validate="'required'"
          data-vv-as="مقدار شارژ"
          class="mt-4"
        />
        <span class="caption" v-if="form.discountCode">
          کد تخفیف : {{ form.discountCode }}
          <v-icon size="12" @click="form.discountCode = null">la-times</v-icon>
        </span>
        <v-btn
          v-else
          text
          class="discount"
          :disabled="!form.denomination.amount || !form.phoneNumber"
          @click="openDiscount"
        >
          وارد کردن کد تخفیف
        </v-btn>
        <v-btn
          block
          @click="onSubmit"
          :loading="loading"
          :disabled="loading"
          class="resaa-btn"
        >
          <span>تایید و ادامه</span>
          <template v-slot:loader>
            <span class="white--text">لطفاً صبر کنید...</span>
          </template>
        </v-btn>
      </form>
    </v-card>

    <ChargeHelpBlock class="mt-4" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import HeaderCharge from '../HeaderCharge/HeaderCharge.vue'
import ToggleDoctor from './ToggleDoctor.vue'
import DenominationSelect from './DenominationSelect.vue'
import ChargeHelpBlock from '../ChargeHelpBlock/ChargeHelpBlock.vue'
import DiscountDialog from '../ChargeDiscountDialog/ChargeDiscountDialog.vue'
@Component({
  components: {
    HeaderCharge,
    ToggleDoctor,
    DenominationSelect,
    ChargeHelpBlock,
    DiscountDialog,
  },
})
export default class ChargeForm extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly loading!: Boolean

  hasDoctorName = false
  form = {
    phoneNumber: '',
    denomination: {},
    discountCode: null,
  }
  mounted() {
    if (this.$auth.user && this.$auth.user.phoneNumber) {
      this.form.phoneNumber = this.$auth.user.phoneNumber
    } else {
      let info = this.$storage.getUniversal('profile')
      if (info && info.phoneNumber) {
        this.form.phoneNumber = info.phoneNumber
      }
    }
  }
  onSubmit() {
    this.$validator.validate().then((valid) => {
      if (valid) {
        this.$emit('submit', this.form)
      }
    })
  }
  async openDiscount() {
    let discountcode = await this.$dialog.show({
      component: DiscountDialog,
      scope: this.form,
    })
    this.form.discountCode = discountcode
  }
}
</script>
