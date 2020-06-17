<style lang="scss" scoped>
.main-header {
  ::v-deep {
    .v-app-bar__nav-icon {
      border: none;
      background: none;
      box-shadow: none !important;
      .v-btn__content {
        color: $primary-color;
      }
    }

    .theme--dark.v-btn.v-btn--icon {
      color: $primary-color;
    }

    .charge {
      height: 28px;
    }
  }
}
</style>

<template>
  <v-app-bar class="main-header" color="white" dense dark fixed>
    <v-app-bar-nav-icon @click="$emit('toggleNavbar')"></v-app-bar-nav-icon>

    <div class="logo">
      <nuxt-link to="/">
        <v-img height="25" width="60" src="/images/logo.png" alt="رسا" contain />
      </nuxt-link>
    </div>

    <v-spacer />

    <nuxt-link :to="avatarLink">
      <v-avatar size="30">
        <img src="/images/icons/ic_account_circle.svg" />
      </v-avatar>
    </nuxt-link>

    <v-btn to="/charge" outlined dense class="charge mr-3">افزایش اعتبار</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeaderMobile extends Vue {
  get avatarLink() {
    if (this.$auth.loggedIn) {
      return '/patient/profile'
    } else {
      return '/patient/login'
    }
  }
}
</script>
