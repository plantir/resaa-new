import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class MetadataService {
  constructor(public $axios: NuxtAxiosInstance) {}
  getMetadata(slug: string) {
    return this.$axios.$get(`PageMetadata/page/${slug}`)
  }
}
