<style lang="scss" scoped></style>
<template>
  <main>
    <div>
      <SectionIntro :doctors="doctors" :loading="loadingDoctors" />
    </div>
    <SectionSearch />
    <div v-if="loggedIn">
      <ChosenDoctor
        title="متخصصین پیشنهادی برای شما"
        :doctors="doctors"
        :loading="loadingDoctors"
      />
      <!-- <DiseasesList /> -->
      <ChosenDoctor
        title="مشاوره کرونا"
        :doctors="suggestionDoctors"
        :loading="loadingSuggestionDoctors"
      />
      <ChosenDoctor
        title="متخصصین برگزیده"
        :doctors="suggestionDoctors"
        :loading="loadingSuggestionDoctors"
      />
    </div>
    <div v-if="!loggedIn">
      <SectionFeatures :doctors="doctors" />
      <SectionTestimonial />
    </div>
    <SectionWeblog :posts="posts" />
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
import ChosenDoctor from '@/components/Pages/Home/ChosenDoctors/ChosenDoctors.vue'
import DiseasesList from '@/components/Pages/Home/DiseasesList/DiseasesList.vue'
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
    ChosenDoctor,
    DiseasesList,
  },
})
export default class HomePage extends Vue {
  doctors: Doctor[] | undefined = []
  suggestionDoctors: Doctor[] = []
  posts: any = []
  loadingDoctors = false
  loadingSuggestionDoctors = false
  public head() {
    return {
      title: 'سامانه رسا',
      bodyAttrs: {
        class: 'page-home',
      },
    }
  }
  get loggedIn() {
    return this.$auth.loggedIn
  }
  async fetch() {
    this.posts = await this.$service.weblog.getPosts()
  }
  async mounted() {
    try {
      this.loadingSuggestionDoctors = true
      const { result } = await this.$service.doctors.chosenDoctors()
      this.suggestionDoctors = result.doctors
      this.loadingSuggestionDoctors = false
    } catch (error) {
      this.loadingSuggestionDoctors = false
    }
    try {
      this.loadingDoctors = true
      const { result } = await this.$service.doctors.getRelatedDoctors(1141, {
        limit: 12,
      })
      this.doctors = result.relatedDoctors
      this.loadingDoctors = false
    } catch (error) {
      this.loadingDoctors = false
    }
  }
}
</script>
