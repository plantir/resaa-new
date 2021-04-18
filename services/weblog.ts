import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class WeblogService {
  constructor(public $axios: NuxtAxiosInstance) {}
  getPosts() {
    return this.$axios.$get(
      'https://resaa.net/blog/wp-json/wp/v2/posts?per_page=5&_embed'
    )
  }
}
