<style lang="scss" scoped></style>
<template>
  <main>
    <div>
      <SectionIntro
        :doctors="doctors"
        :loading="loadingDoctors"
        :pageInfo="pageInfo"
      />
    </div>
    <SectionSearch />
    <div v-if="loggedIn">
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
    <div>
      <SectionFeatures :doctors="doctors" />
      <SectionTestimonial :items="testimonials" :loading="testimonialLoading" />
    </div>
    <SectionWeblog :posts="posts" v-if="posts.length" />
    <SedctionSocial />
  </main>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
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
  scrollToTop: true,
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
  testimonials: any = []
  testimonialLoading = true
  loadingDoctors = true
  loadingSuggestionDoctors = true
  pageInfo = {}
  public head() {
    return {
      title: 'با پزشک یا روان‌شناس مد نظرتان مستقیما صحبت کنید',
      bodyAttrs: {
        class: 'page-home',
      },
    }
  }
  get loggedIn() {
    return this.$auth.loggedIn
  }
  async fetch() {
    if (!this.$isServer) {
      this.fetchClient()
    } else {
      await this.fetchServer()
    }
  }

  fetchClient() {
    this.$service.metadata.getMetadata('home').then((res) => {
      this.pageInfo = res
    })
    this.loadingSuggestionDoctors = true
    this.$service.doctors
      .chosenDoctors()
      .then((res) => {
        this.suggestionDoctors = res.result.doctors
        this.loadingSuggestionDoctors = false
      })
      .catch((err) => {
        this.loadingSuggestionDoctors = false
      })
    this.loadingDoctors = true
    this.$service.doctors
      .getRelatedDoctors(1141, {
        limit: 12,
      })
      .then((data) => {
        this.doctors = data.result.relatedDoctors
        this.loadingDoctors = false
      })
      .catch((err) => {
        this.loadingDoctors = false
      })

    this.$service.testimonials
      .getTestimonials()
      .then((data) => {
        this.testimonials = data
        this.testimonialLoading = false
      })
      .catch((err) => {
        this.testimonialLoading = false
      })

    this.$service.weblog.getPosts().then((data) => {
      this.posts = data
    })
  }
  async fetchServer() {
    try {
      let [meta, chosen_doctors, suggest_doctors, testimonials, posts] =
        await Promise.all([
          this.$service.metadata.getMetadata('home'),
          this.$service.doctors.chosenDoctors(),
          this.$service.doctors.getRelatedDoctors(1141, {
            limit: 12,
          }),
          this.$service.testimonials.getTestimonials(),
          this.$service.weblog.getPosts(),
        ])
      this.pageInfo = meta
      this.suggestionDoctors = chosen_doctors.result.doctors
      this.doctors = suggest_doctors.result.relatedDoctors
      this.testimonials = testimonials
      this.posts = posts
    } catch (error) {}
    this.loadingSuggestionDoctors = false
    this.loadingDoctors = false
    this.testimonialLoading = false
  }
}
</script>
