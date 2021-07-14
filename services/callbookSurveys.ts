import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class CallbookSurveyService {
  path = 'CallBookSurveys'
  constructor(public $axios: NuxtAxiosInstance) {}
  getDoctorSurveys(id: string) {
    return this.$axios.$get(`${this.path}/Doctor/${id}`)
  }
  likeSurvey(id: string) {
    return this.$axios.$post(`${this.path}/${id}/Like`)
  }
  dislikeSurvey(id: string) {
    return this.$axios.$post(`${this.path}/${id}/Dislike`)
  }
  withdrawSurvey(id: string) {
    return this.$axios.$post(`${this.path}/${id}/Withdraw`)
  }
  fields() {
    return this.$axios.$get(`${this.path}/Fields`)
  }
  create(data: any) {
    return this.$axios.$post(`${this.path}`, data)
  }
}
