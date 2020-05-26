<style lang="scss" scoped></style>
<template>
  <main>
    <SectionIntro />
    <SectionSearch />
    <SectionFeatures />
    <SectionTestimonial />
    <SectionWeblog />
    <SedctionSocial />
  </main>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SectionIntro from '@/components/Pages/Home/SectionIntro/SectionIntro.vue'
import SectionSearch from '@/components/Pages/Home/SectionSearch/SectionSearch.vue'
import SectionFeatures from '@/components/Pages/Home/SectionFeatures/SectionFeatures.vue'
import SectionTestimonial from '@/components/Pages/Home/SectionTestimonial/SectionTestimonial.vue'
import SectionWeblog from '@/components/Pages/Home/SectionWeblog/SectionWeblog.vue'
import SedctionSocial from '@/components/Pages/Home/SedctionSocial/SedctionSocial.vue'

Component.registerHooks(['fetch', 'head'])

@Component({
  layout: ctx => (ctx.isMobile ? 'mobile' : 'desktop'),
  components: {
    SectionIntro,
    SectionSearch,
    SectionFeatures,
    SectionTestimonial,
    SectionWeblog,
    SedctionSocial,
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
