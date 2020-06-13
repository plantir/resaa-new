<style lang="scss" scoped>
.main-header {
  ::v-deep {
    .theme--dark.v-btn.v-btn--icon {
      color: $primary-color;
    }
  }
}
</style>

<template>
  <v-app-bar class="main-header" color="white" dense dark fixed>
    <v-app-bar-nav-icon @click="$emit('toggleNavbar')"></v-app-bar-nav-icon>

    <div class="logo">
      <v-img height="25" width="60" src="/images/logo.png" alt="رسا" contain />
    </div>

    <v-spacer />

    <v-avatar @click="onAvatar" size="30">
      <img src="/images/icons/ic_account_circle.svg" />
    </v-avatar>

    <v-btn outlined dense>
      <nuxt-link to="/charge">
        افزایش اعتبار
      </nuxt-link>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeaderMobile extends Vue {
  onAvatar() {
    if (this.$auth.loggedIn) {
      this.$router.push('/patient/profile')
    } else {
      this.$router.push('/patient/login')
    }
  }
}
</script>
