import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class TestimonialsService {
  constructor(public $axios: NuxtAxiosInstance) {}
  getTestimonials() {
    return this.$axios.$get('/websitetestimonials')
  }
}
