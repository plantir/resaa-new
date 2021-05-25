import { ResultProfile } from '@/models/Auth'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { IResponse } from '~/@types/service'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getProfile(userId: string): Promise<IResponse<ResultProfile>> {
    return this.$axios.$get(`/Accounts/${userId}/Profile`)
  }

  login(params: any) {
    let data = `username=${params.username}&password=${params.password}&grant_type=${params.grant_type}`
    return this.$axios.$post(`/oauth2/token`, data, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    })
  }

  forgotPassword(phoneNumber: string) {
    return this.$axios.$get(
      `Accounts/phonenumber/${phoneNumber}/forgotpassword`
    )
  }
}
