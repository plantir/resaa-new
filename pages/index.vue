<style lang="scss" scoped></style>
<template>
  <div>
    <CM1 v-if="$device.isDesktop" />
    <CM1Mob v-else />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import logoComponent from '~/assets/svg/logo.svg?inline'

Component.registerHooks(['fetch', 'head'])

@Component({
  layout: ctx => (ctx.isMobile ? 'mobile' : 'desktop'),
  components: {
    logoComponent,
    CM1: () =>
      import(
        '@/components/Pages/Home/Desktop/ComponentDekstop/ComponentDekstop.vue'
      ),
    CM1Mob: () =>
      import(
        '@/components/Pages/Home/Mobile/ComponentMobile/ComponentMobile.vue'
      ),
  },
})
export default class YourComponent extends Vue {
  public head() {
    return {
      title: 'سامانه رسا',
      bodyAttrs: {
        class: 'page-home',
      },
    }
  }
}
</script>

<style lang="scss" scope></style>
