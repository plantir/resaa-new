import { ResultDoctor, Doctor, ResultRelatedDoctor } from '@/models/Doctor'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { IResponse } from '~/@types/service'
interface IDoctroQueryParams {
  fields?: String
  limit?: Number
  query?: String | null
  offset?: Number
  sort?: Number
  filters?: Object
}
export default class DoctorService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getRelatedDoctors(
    categoryId: string | number,
    params: {
      limit: Number
      offset?: Number
    }
  ): Promise<IResponse<Doctor>> {
    return this.$axios.$get(`/categories/${categoryId}/RelatedDoctors`, {
      params: params,
    })
  }

  query(params: IDoctroQueryParams): Promise<IResponse<ResultDoctor>> {
    if (params.query == '') params.query = null
    return this.$axios.$get('/Doctors', { params })
  }
  get(id: number | string): Promise<IResponse<{ doctor: Doctor }>> {
    return this.$axios.$get(`/Doctors/${id}/profile`)
  }
  relatedDoctors(
    id: number | string,
    limit = 5
  ): Promise<IResponse<{ relatedDoctors: Doctor[] }>> {
    return this.$axios.$get(`/Doctors/${id}/RelatedDoctors?limit=${limit}`)
  }
  chosenDoctors() {
    return this.$axios.$get(`/Doctors/Highlight`)
  }
  getTopCategories() {
    return this.$axios.$get(`Doctors/SpecialtiesAndCategories`)
  }
  searchCategory(params: { query: String }) {
    return this.$axios.$get(`categories`, { params })
  }
  MedicalSpecialties() {
    return this.$axios.$get(`doctors/MedicalSpecialties`)
  }
  getComments(id: string) {
    return this.$axios.$get(`CallBookSurveys/Doctor/${id}`)
  }
  callbackRequest(data: any) {
    return this.$axios.$post(`/calls/WebsiteCallRequest`, data)
  }

  getCharges(id: string) {
    return this.$axios.$get(`/Doctors/${id}/TimeBasedChargePackages`)
  }

  recommendations(data: any) {
    return this.$axios.$post(`/DoctorRecommendations`, data)
  }
}
