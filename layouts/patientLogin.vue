
<style lang="scss" scoped>
.bg {
  @include media(1024) {
    background: url('/images/auth/verify_bg.jpg') no-repeat;
    background-position: 20% 98%;
  }
  @include media(1280) {
    background-position: 10% 72%;
  }
  @include media(1366) {
    background-position: 5% 80%;
  }
  @include media(1440) {
    background-position: 0 75%;
  }
  @include media(1900) {
    // background-position-x: -200px;
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
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    HeaderMobile: () =>
      import('@/components/Layout/Mobile/HeaderMobile/HeaderMobile.vue'),
    MenuMobile: () =>
      import('@/components/Layout/Mobile/MenuMobile/MenuMobile.vue'),
    HeaderLogin: () =>
      import(
        '@/components/Layout/Desktop/PatientLoginHeader/PatientLoginHeader.vue'
      ),
  },
})
export default class DefaultLayout extends Vue {
  drawer = false
}
</script>
