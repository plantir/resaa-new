<style lang="scss" scoped>
.v-application {
  background: red;
  .auth {
    position: relative;
    .form-wrapper {
      display: flex;
      height: calc(100vh - 114px);
      @include media(sm) {
        margin-right: 134px;
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
      <VerifyForm class="login-wrap" v-model="form" @submit="onSubmit" />
    </div>
    <BottomBackground v-if="$device.isMobile" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import VerifyForm from '@/components/Pages/Patient/Login/VerifyForm/VerifyForm.vue'
import BottomBackground from '@/components/Common/BottomBackground/BottomBackground.vue'
import { ReqLogin } from '@/models/Auth'
import decodeToken from '@/utils/jwtDecode'
import { getModule } from 'vuex-module-decorators'

Component.registerHooks(['fetch', 'head'])

@Component({
  middleware: 'guest',
  layout: 'patientLogin',
  components: {
    VerifyForm,
    BottomBackground,
  },
})
export default class LoginPage extends Vue {
  form = {
    username: null,
    password: null,
    grant_type: 'password',
  }

  public head() {
    return {
      title: 'ورود',
      bodyAttrs: {
        class: 'page-login',
      },
    }
  }

  async onSubmit(formData: ReqLogin) {
    try {
      const payload = new URLSearchParams(formData as any).toString()
      const { data } = await this.$auth.loginWith('local', { data: payload })

      const token = data.access_token

      const tokenDecode = decodeToken(token)

      const userId =
        tokenDecode[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
        ]

      await this.$auth.setUserToken(token)

      const { result: resProfile } = await this.$service.auth.getProfile(userId)
      const payloadProfile = {
        ...resProfile.profile,
        userId: userId,
      }
      // console.log('LoginPage -> onSubmit -> payloadProfile', payloadProfile)

      this.$auth.$storage.setCookie('profile', payloadProfile, true)

      this.$auth.setUser(payloadProfile)

      this.$toast.success().showSimple('خوش آمدید!')
    } catch (error) {
      this.$toast.error().showSimple('کلمه عبور یا نام کاربری صحیح نمی باشد.')
    }
  }
}
</script>
