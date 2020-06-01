import { ResultProfile } from '@/models/Auth'
import { ResultCalls } from '@/models/Call'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { IResponse } from '~/@types/service'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getCalls(
    userId: string,
    offset: number = 0,
    limit: number = 5
  ): Promise<IResponse<ResultCalls>> {
    return this.$axios.$get(`/Accounts/${userId}/Calls`, {
      params: {
        offset: offset,
        limit: limit,
      },
    })
  }

  updateProfile(
    userId: string,
    payload: any
  ): Promise<IResponse<ResultProfile>> {
    return this.$axios.$put(`/Accounts/${userId}/Profile`, payload)
  }
}
