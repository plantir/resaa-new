import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class CategoryService {
  constructor(public $axios: NuxtAxiosInstance) {}
  search(params?: any) {
    return this.$axios.$get('/categories', { params })
  }
  RelatedDoctors(id: string, params: any) {
    return this.$axios.$get(`/categories/${id}/RelatedDoctors`, { params })
  }
  active() {
    return this.$axios.$get(`/categories/active?type=1&offset=0`)
  }
}
