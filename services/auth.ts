import { ResultProfile } from '@/models/Auth'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { IResponse } from '~/@types/service'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getProfile(userId: string): Promise<IResponse<ResultProfile>> {
    return this.$axios.$get(`/Accounts/${userId}/Profile`)
  }
}
