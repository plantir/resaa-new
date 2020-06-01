<style lang="scss" scoped>
header {
  line-height: 94px;
  height: 94px;
  .left-header {
    ::v-deep {
      .v-btn {
        line-height: 42px;
        height: 42px;
        a {
          color: #fff;
        }
      }
    }
    .auth-link {
      color: #212121;
    }
  }
}
</style>

<template>
  <header>
    <v-container class="d-flex justify-space-between">
      <div class="right-header d-flex">
        <div class="logo d-flex align-center">
          <nuxt-link class="d-flex" to="/">
            <Logo />
          </nuxt-link>
        </div>

        <MainMenu :mainMenu="mainMenu" class="mr-10" />
      </div>

      <div class="left-header">
        <v-btn>
          <nuxt-link to="/charge">افزایش اعتبار</nuxt-link>
        </v-btn>
        <nuxt-link
          v-if="!$auth.loggedIn"
          to="/patient/login"
          class="auth-link font-weight-medium mr-5"
        >ورود/ثبت‌نام</nuxt-link>
        <v-btn v-else @click="logout" color="success">خروج</v-btn>
      </div>
    </v-container>
  </header>
</template>

<script lang="ts">
import Logo from '@/components/Common/Logo/Logo.vue'
import MainMenu from './MainMenu/MainMenu.vue'
import mainMenuItems from '@/const/mainMenu'
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component({
  components: {
    Logo,
    MainMenu,
  },
})
export default class component_name extends Vue {
  data() {
    return {
      mainMenu: mainMenuItems,
    }
  }
  logout() {
    this.$auth.logout()
  }
}
</script>
