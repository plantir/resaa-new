<style lang="scss" scoped></style>
<template>
  <main>
    <SectionIntro class="mt-3" />
    <SectionSearch class="mt-3" />
  </main>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SectionIntro from '@/components/Pages/Home/SectionIntro/SectionIntro.vue'
import SectionSearch from '@/components/Pages/Home/SectionSearch/SectionSearch.vue'

Component.registerHooks(['fetch', 'head'])

@Component({
  layout: ctx => (ctx.isMobile ? 'mobile' : 'desktop'),
  components: {
    SectionIntro,
    SectionSearch,
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
