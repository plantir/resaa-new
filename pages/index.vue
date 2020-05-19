<style lang="scss" scoped></style>
<template>
  <main>
    <Intro class="mt-3" />
  </main>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Intro from '@/components/Pages/Home/Intro/Intro.vue'

Component.registerHooks(['fetch', 'head'])

@Component({
  layout: ctx => (ctx.isMobile ? 'mobile' : 'desktop'),
  components: {
    Intro,
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
