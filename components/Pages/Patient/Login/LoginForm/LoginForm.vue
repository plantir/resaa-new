<style lang="scss" scoped>
.auth-form {
  max-width: 396px;
  z-index: 1;
  .v-card {
    border-radius: 8px !important;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  }
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
  .form {
    padding: 10px 25px 25px;
    @include media(sm) {
      padding: 25px;
    }
    ::v-deep {
      .v-input__slot {
        min-height: 40px;
        @include media(sm) {
          min-height: 56px;
        }
      }
    }
  }
  .desc {
    font-size: 14px;
    font-weight: 500;
    color: #212121;
    line-height: 2;
    margin-bottom: 25px;
    @include media(sm) {
      margin-bottom: 16px;
    }
  }
  .resaa-btn {
    height: 36px !important;
    @include media(sm) {
      height: 48px !important;
    }
  }
  ::v-deep {
    .v-btn {
      line-height: 48px;
      height: 48px;
    }
  }
}
</style>

<template>
  <div class="auth-form" ref="wrapper">
    <v-card class="d-flex flex-column">
      <div class="icon mt-10 d-flex justify-center">
        <div>
          <Icon :size="128" fileName="ic_mobile_number.png" />
        </div>
      </div>
      <form class="form" @submit.prevent="onSubmit">
        <p class="desc">برای ورود به رسا، شماره موبایل خود را وارد کنید.</p>
        <v-text-field
          v-model="form.mobile"
          placeholder="شماره موبایل"
          name="mobile"
          v-validate="'required|mobile'"
          :error-messages="errors.collect('mobile')"
          data-vv-as="موبایل"
          outlined
        />
        <v-btn block @click="onSubmit" class="resaa-btn">تایید و ادامه</v-btn>
      </form>
    </v-card>
    <p class="help-block font-weight-medium d-flex align-start mt-4">
      <Icon v-if="$device.isMobile" class="ml-2" fileName="ic_info.svg" />
      <span class="font-weight-medium text-justify">
        شماره موبایل شما نزد رسا امانت است و برای برقراری ارتباط با پزشک استفاده
        می‌شود، پزشک شماره تماس شما را نخواهد دید و هویت شما کاملا محرمانه می
        ماند.
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/Common/Icon/Icon.vue'
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    Icon,
  },
})
export default class LoginForm extends Vue {
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
    this.$validator.validate().then((valid) => {
      if (valid) {
        this.$emit('submit')
      }
    })
  }
}
</script>
