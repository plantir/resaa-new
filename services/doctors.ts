import { ResultDoctor, Doctor, ResultRelatedDoctor } from '@/models/Doctor'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { IResponse } from '~/@types/service'
interface IDoctroQueryParams {
  fields: String
  limit: Number
  query: String | null
  offset?: Number
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
}
