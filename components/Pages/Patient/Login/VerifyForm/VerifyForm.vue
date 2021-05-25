<style lang="scss" scoped>
.auth-form {
  max-width: 396px;
  z-index: 1;
  .help-block {
    font-size: 12px;
    color: #212121;
    line-height: 2;
  }
  .v-card {
    border-radius: 8px !important;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
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
  .help-block {
    @media only screen and (max-width: 599px) {
      color: #fff;
    }
  }
  .resaa-btn {
    height: 36px !important;
    @include media(sm) {
      height: 48px !important;
    }
  }
  .forgot-password {
    a {
      color: #35d6c1;
    }
  }
  .space {
    margin-top: 25px;
    @include media(sm) {
      margin-top: 16px;
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
        <Icon fileName="ic_password.svg" />
      </div>
      <form class="form" @submit.prevent="onSubmit">
        <p class="desc font-weight-medium">
          شماره شما قبلا در رسا ثبت شده است. لطفا رمز عبود خود را وارد کنید.
        </p>
        <EditMobile />
        <v-text-field
          v-model="form.password"
          class="space"
          placeholder="رمز عبور"
          name="password"
          type="password"
          v-validate="'required'"
          :error-messages="errors.collect('password')"
          data-vv-as="رمز عبور"
          outlined
        />
        <div class="forgot-password font-weight-medium">
          <span>رمز عبور را فراموش کرده‌اید؟</span>
          <a @click="forgotPassword">بازیابی رمز عبور</a>
        </div>
        <v-btn class="resaa-btn mt-8" block @click="onSubmit">
          تایید و ادامه
        </v-btn>
      </form>
    </v-card>
    <p
      v-if="$device.isMobile"
      class="help-block font-weight-medium d-flex align-start mt-4"
    >
      <Icon class="ml-2" fileName="ic_info.svg" />
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
import EditMobile from './EditMobile.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Icon,
    EditMobile,
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
        this.$emit('submit', {
          ...this.form,
          username: this.$storage.getUniversal('login_mobile'),
          grant_type: 'password',
        })
      }
    })
  }
  forgotPassword() {
    this.$emit('forgotPassword')
  }
}
</script>
