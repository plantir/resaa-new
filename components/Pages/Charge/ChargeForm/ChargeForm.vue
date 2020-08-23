<style lang="scss" scoped>
.charge-form {
  position: relative;
  width: 400px;
  z-index: 1;
  p {
    color: #212121;
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
        <p class="font-weight-medium">
          به‌منظور افزایش اعتبار، شماره موبایل خود را وارد و مقدار شارژ‌را
          انتخاب کنید.
        </p>
      </HeaderCharge>

      <form class="pa-6" @submit.prevent="onSubmit">
        <v-text-field
          v-model="form.phoneNumber"
          :error-messages="errors.collect('phoneNumber')"
          :disabled="loading"
          clearable
          placeholder="شماره موبایل"
          name="phoneNumber"
          v-validate="'required|mobile'"
          data-vv-as="موبایل"
          outlined
        />

        <ToggleDoctor v-model="hasDoctorName" />

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
        />

        <DenominationSelect
          v-model="form.denominationId"
          :error-messages="errors.collect('denominationId')"
          :disabled="loading"
          name="denominationId"
          v-validate="'required'"
          data-vv-as="مقدار شارژ"
          class="mt-4"
        />

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

@Component({
  components: {
    HeaderCharge,
    ToggleDoctor,
    DenominationSelect,
    ChargeHelpBlock,
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
    denominationId: null,
  }
  mounted() {
    if (this.$auth.user) {
      this.form.phoneNumber = this.$auth.user.phoneNumber
    }
  }
  onSubmit() {
    this.$validator.validate().then(valid => {
      if (valid) {
        this.$emit('submit', this.form)
      }
    })
  }
}
</script>
