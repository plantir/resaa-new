<style lang="scss" scoped>
.main-header {
  position: relative;
  line-height: 94px;
  height: 94px;
  z-index: 999;
  width: 100%;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1) all;

  &.sticky {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    position: fixed;
    top: 0;
    &.main-header {
      line-height: 70px;
      height: 70px;
    }
  }
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
  @media (xs) {
    background-color: red;
  }
}
</style>

<template>
  <header
    class="main-header"
    :class="{
      sticky: scrolled,
    }"
  >
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
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
@Component({
  components: {
    Logo,
    MainMenu,
    UserMenuNotLoggedIn,
    UserMenuLoggedIn,
  },
})
export default class HeaderDesktopComponent extends Vue {
  get mainMenu() {
    return this.$store.state.navigation.items
  }

  limitPosition = 500
  scrolled = false
  lastPosition = 0

  handleScroll() {
    if (
      this.lastPosition < window.scrollY &&
      this.limitPosition < window.scrollY
    ) {
      // move up!
      this.scrolled = true
    }

    if (this.lastPosition > window.scrollY) {
      // move down
      this.scrolled = false
    }

    this.lastPosition = window.scrollY
    this.scrolled = window.scrollY > 250
  }

  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
