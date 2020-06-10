<template>
  <v-app :dark="false">
    <HeaderDesktop />
    <v-content>
      <nuxt />
    </v-content>
    <FooterDesktop />
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import FooterDesktop from '@/components/Layout/Desktop/FooterDesktop/FooterDesktop.vue'
import HeaderDesktop from '@/components/Layout/Desktop/HeaderDesktop/HeaderDesktop.vue'

@Component({
  components: {
    FooterDesktop,
    HeaderDesktop,
  },
})
export default class DefaultLayout extends Vue {}
</script>
