<style lang="scss" scope>
.v-application {
  .auth {
    background: url('/images/auth/login_bg.png') no-repeat;
    background-position: top;
    position: relative;
    margin-top: 20px;
    @media only screen and (max-width: 599px) {
      background-image: none;
      padding: 0 24px;
      margin-top: 0 !important;
    }
    @media only screen and (min-width: 1900px) {
      background-position-x: -200px;
      padding: 0;
    }
    .form-wrapper {
      display: flex;
      height: calc(100vh - 114px);
      @include media(sm) {
        margin-right: 133px;
        padding-top: 53px;
      }
    }
    .login-wrap {
      @media only screen and (min-width: 1900px) {
        margin-right: 150px;
      }
    }
  }
}
</style>

<template>
  <div class="auth">
    <div class="form-wrapper">
      <LoginForm class="login-wrap" v-model="form" @submit="onSubmit" />
    </div>
    <BottomBackground v-if="$device.isMobile" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import LoginForm from '@/components/Pages/Patient/Login/LoginForm/LoginForm.vue'
import BottomBackground from '@/components/Common/BottomBackground/BottomBackground.vue'

Component.registerHooks(['fetch', 'head'])

@Component({
  middleware: 'guest',
  layout: 'withoutFooter',
  components: {
    LoginForm,
    BottomBackground,
  },
})
export default class LoginPage extends Vue {
  form = {
    mobile: this.$auth.$storage.getCookie('login_mobile') || null,
  }

  public head() {
    return {
      title: 'ورود',
      bodyAttrs: {
        class: 'page-login',
      },
    }
  }

  onSubmit() {
    this.$auth.$storage.setCookie('login_mobile', this.form.mobile, false)
    this.$router.push('/patient/login/verify')
  }
}
</script>
