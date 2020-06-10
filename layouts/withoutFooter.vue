<template>
  <v-app :dark="false">
    <HeaderDesktop />
    <v-content>
      <nuxt />
    </v-content>
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
export default class withoutFooterLayout extends Vue {
  data() {
    return {
      user: {
        firstName: 'آرمین',
        lastName: 'خیرخواهان',
      },
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  }
}
</script>

<style lang="scss"></style>
