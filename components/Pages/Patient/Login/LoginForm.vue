<template>
  <div class="auth-form">
    <v-card class="d-flex flex-column">
      <div class="icon mt-10 d-flex justify-center">
        <Icon fileName="ic_mobile_number.png" />
      </div>
      <form class="pa-6" @submit.prevent="onSubmit">
        <p class="desc font-weight-medium">
          برای ورود به رسا، شماره موبایل خود را وارد کنید.
        </p>
        <v-text-field
          v-model="form.mobile"
          class="ltr-input"
          placeholder="شماره موبایل"
          :error-messages="errors.collect('موبایل')"
          v-validate="'required|mobile'"
          data-vv-name="موبایل"
          outlined
        />
        <v-btn block @click="onSubmit" :disabled="!formValidated">
          تایید و ادامه
        </v-btn>
      </form>
    </v-card>
    <p
      class="help-block font-weight-medium d-flex align-start text-justify mt-2"
    >
      <Icon v-if="$device.isMobile" class="ml-2" fileName="ic_info.svg" />
      <span>
        شماره موبایل شما نزد رسا امانت است و برای برقراری ارتباط با پزشک استفاده
        می‌شود، پزشک شماره تماس شما را نخواهد دید و هویت شما کاملا محرمانه می
        ماند.
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Common/Icon/Icon.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Icon,
  },
})
export default class extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly value!: object
  fields!: []

  get form() {
    return this.value
  }
  set form(val) {
    this.$emit('input', val)
  }

  onSubmit() {
    this.$validator.validate().then(valid => {
      if (valid) {
        this.$emit('submit')
      }
    })
  }

  get formValidated() {
    return (
      Object.keys(this.fields).some(key => this.fields[key].validated) &&
      Object.keys(this.fields).some(key => this.fields[key].valid)
    )
  }
}
</script>

<style lang="scss" scoped>
.auth-form {
  max-width: 396px;
  .desc,
  .help-block {
    font-size: 12px;
    color: #212121;
    line-height: 2;
  }
  .help-block {
    @media only screen and (max-width: 599px) {
      color: #fff;
    }
  }
  .desc {
    font-size: 14px;
  }
  ::v-deep {
    .v-btn {
      line-height: 48px;
      height: 48px;
    }
  }
}
</style>
