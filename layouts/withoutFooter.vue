<template>
  <v-app :dark="false">
    <MenuMobile v-model="drawer" v-if="$device.isMobile" />
    <HeaderMobile @toggleNavbar="drawer = !drawer" v-if="$device.isMobile" />
    <HeaderDesktop v-else />
    <v-content>
      <nuxt />
    </v-content>
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
export default class WithoutFooterLayout extends Vue {
  drawer = false
}
</script>
