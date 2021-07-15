
<style lang="scss" scoped>
.bg {
  @include media(1024) {
    background: url('/images/auth/bg.png') no-repeat;
    background-position: 50% 100%;
  }
  @include media(1280) {
    background-position: 40% 100%;
  }
  @include media(1440) {
    background-position: 0 100%;
  }
}
</style>

<template>
  <v-app>
    <main>
      <section class="bg">
        <MenuMobile v-model="drawer" v-if="$device.isMobileOrTablet" />
        <HeaderMobile
          @toggleNavbar="drawer = !drawer"
          v-if="$device.isMobileOrTablet"
        />
        <HeaderLogin v-else />
        <nuxt />
      </section>
    </main>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    HeaderMobile: () =>
      import('@/components/Layout/Mobile/HeaderMobile/HeaderMobile.vue'),
    MenuMobile: () =>
      import('@/components/Layout/Mobile/MenuMobile/MenuMobile.vue'),
    HeaderLogin: () =>
      import('@/components/Layout/Desktop/HeaderDesktop/HeaderDesktop.vue'),
  },
})
export default class DefaultLayout extends Vue {
  drawer = false
}
</script>
