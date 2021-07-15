<template>
  <v-app :dark="false">
    <MenuMobile v-model="drawer" v-if="$device.isMobileOrTablet" />
    <HeaderMobile
      @toggleNavbar="drawer = !drawer"
      v-if="$device.isMobileOrTablet"
    />
    <HeaderDesktop v-else />
    <v-content id="content">
      <nuxt />
    </v-content>
    <FooterDesktop />
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
import FooterDesktop from '@/components/Layout/Desktop/FooterDesktop/FooterDesktop.vue'
import HeaderDesktop from '@/components/Layout/Desktop/HeaderDesktop/HeaderDesktop.vue'

@Component({
  components: {
    HeaderDesktop: () =>
      import('@/components/Layout/Desktop/HeaderDesktop/HeaderDesktop.vue'),
    HeaderMobile: () =>
      import('@/components/Layout/Mobile/HeaderMobile/HeaderMobile.vue'),
    MenuMobile: () =>
      import('@/components/Layout/Mobile/MenuMobile/MenuMobile.vue'),
    FooterDesktop,
  },
})
export default class DefaultLayout extends Vue {
  drawer = false
}
</script>
