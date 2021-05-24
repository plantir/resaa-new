import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class CallbookSurveyService {
  constructor(public $axios: NuxtAxiosInstance) {}
  getDoctorSurveys(id: string) {
    return this.$axios.$get(`CallBookSurveys/Doctor/${id}`)
  }

  likeSurvey(id: string) {
    return this.$axios.$post(`CallBookSurveys/${id}/Like`)
  }
  dislikeSurvey(id: string) {
    return this.$axios.$post(`CallBookSurveys/${id}/Dislike`)
  }
  withdrawSurvey(id: string) {
    return this.$axios.$post(`CallBookSurveys/${id}/Withdraw`)
  }
}
