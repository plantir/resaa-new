<style lang="scss" scoped></style>
<template>
  <main>
    <SectionIntro :doctors="doctors" />
    <SectionSearch />
    <SectionFeatures :doctors="doctors" />
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
import { Doctor } from '../models/Doctor'

Component.registerHooks(['fetch', 'head'])

@Component({
  components: {
    SectionIntro,
    SectionSearch,
    SectionFeatures,
    SectionTestimonial,
    SectionWeblog,
    SedctionSocial,
  },
})
export default class HomePage extends Vue {
  doctors: Doctor[] | undefined = []
  public head() {
    return {
      title: 'سامانه رسا',
      bodyAttrs: {
        class: 'page-home',
      },
    }
  }
  async fetch() {
    try {
      const { result } = await this.$service.doctors.getRelatedDoctors(1141, {
        limit: 12,
      })
      this.doctors = result.relatedDoctors
    } catch (error) {
      // console.log('Doctors -> fetch -> error', error)
    }
  }
}
</script>
