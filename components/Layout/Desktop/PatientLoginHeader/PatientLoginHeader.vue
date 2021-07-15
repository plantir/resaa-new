<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 94px;
  padding: 0 28px 0 46px;
  .home {
    font-size: 14px;
    font-weight: 500;
    color: #212121;
    padding-right: 30px;
  }
}
</style>

<template>
  <div class="header">
    <div class="logo">
      <Logo />
    </div>
    <nuxt-link to="/" class="home">خانه</nuxt-link>
    <v-spacer></v-spacer>

    <UserMenuLoggedIn v-if="$auth.loggedIn" />
    <UserMenuNotLoggedIn v-else />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '@/components/Common/Logo/Logo.vue'

import UserMenuLoggedIn from '../HeaderDesktop/UserMenu/UserMenuLoggedIn.vue'
import UserMenuNotLoggedIn from '../HeaderDesktop/UserMenu/UserMenuNotLoggedIn.vue'
@Component({
  components: {
    UserMenuLoggedIn,
    UserMenuNotLoggedIn,
    Logo,
  },
})
export default class PatinetLoginHeaderComponent extends Vue {
  //   get mainMenu() {
  //     return this.$store.state.navigation.items
  //   }
  //   limitPosition = 500
  //   scrolled = false
  //   lastPosition = 0
  //   handleScroll() {
  //     if (
  //       this.lastPosition < window.scrollY &&
  //       this.limitPosition < window.scrollY
  //     ) {
  //       // move up!
  //       this.scrolled = true
  //     }
  //     if (this.lastPosition > window.scrollY) {
  //       // move down
  //       this.scrolled = false
  //     }
  //     this.lastPosition = window.scrollY
  //     this.scrolled = window.scrollY > 250
  //   }
  //   mounted() {
  //     if (process.client) {
  //       window.addEventListener('scroll', this.handleScroll)
  //     }
  //   }
  //   destroyed() {
  //     window.removeEventListener('scroll', this.handleScroll)
  //   }
}
</script>
