<style lang="scss" scoped>
.main-header {
  line-height: 94px;
  height: 94px;
  .container {
    padding: 0;
  }
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
  <header class="main-header">
    <v-container class="d-flex justify-space-between">
      <div class="right-header d-flex">
        <div class="logo d-flex align-center">
          <nuxt-link class="d-flex" to="/">
            <Logo />
          </nuxt-link>
        </div>

        <MainMenu v-if="!$device.isMobile" :mainMenu="mainMenu" class="mr-10" />
      </div>

      <UserMenuLoggedIn v-if="$auth.loggedIn" />
      <UserMenuNotLoggedIn v-else />
    </v-container>
  </header>
</template>

<script lang="ts">
import Logo from '@/components/Common/Logo/Logo.vue'
import MainMenu from './MainMenu/MainMenu.vue'
import UserMenuLoggedIn from './UserMenu/UserMenuLoggedIn.vue'
import UserMenuNotLoggedIn from './UserMenu/UserMenuNotLoggedIn.vue'
import mainMenuItems from '@/const/mainMenu'
import Vue from 'vue'

export default Vue.extend({
  components: {
    Logo,
    MainMenu,
    UserMenuNotLoggedIn,
    UserMenuLoggedIn,
  },
  data() {
    return {
      mainMenu: mainMenuItems,
    }
  },
})
</script>
