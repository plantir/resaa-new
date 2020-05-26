import { ResultDoctor, ResultRelatedDoctor } from '@/models/Doctor'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { IResponse } from '~/@types/service'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getRelatedDoctors(
    categoryId: string | number,
    params: {
      limit: Number
      offset?: Number
    }
  ): Promise<IResponse<ResultRelatedDoctor>> {
    return this.$axios.$get(`/categories/${categoryId}/RelatedDoctors`, {
      params: params,
    })
  }

  getDoctors(params: {
    fields: String
    limit: Number
    query: String
    offset?: Number
  }): Promise<IResponse<ResultDoctor>> {
    return this.$axios.$get('/Doctors', {
      params: params,
    })
  }
}
