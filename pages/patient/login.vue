<style lang="scss" scoped></style>
<template>
  <div class="auth mt-5">
    <v-container class="d-flex align-center">
      <LoginForm class="login-wrap" v-model="form" @submit="onSubmit" />
    </v-container>
    <BottomBackground v-if="$device.isMobile" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import LoginForm from '@/components/Pages/Patient/Login/LoginForm.vue'
import BottomBackground from '@/components/Common/BottomBackground/BottomBackground.vue'

Component.registerHooks(['fetch', 'head'])

@Component({
  layout: ctx =>
    ctx.isMobile ? 'mobileWithoutFooter' : 'desktopWithoutFooter',
  components: {
    LoginForm,
    BottomBackground,
  },
})
export default class LoginPage extends Vue {
  form = {}

  public head() {
    return {
      title: 'ورود',
      bodyAttrs: {
        class: 'page-login',
      },
    }
  }

  onSubmit() {
    console.log(this.form)
  }
}
</script>

<style lang="scss" scope>
.v-application {
  .auth {
    background: url('/images/auth/bg.png') no-repeat;
    background-position: bottom;
    position: relative;
    z-index: 1;
    @media only screen and (max-width: 599px) {
      background-image: none;
      margin-top: 0 !important;
    }
    @media only screen and (min-width: 1900px) {
      background-position-x: -200px;
    }
    .container {
      height: calc(100vh - 114px);
    }
    .login-wrap {
      @media only screen and (min-width: 1900px) {
        margin-right: 150px;
      }
    }
  }
}
</style>
