import { ProfileResult } from '@/models/Auth'
import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getProfile(userId: string): Promise<ProfileResult> {
    return this.$axios.$get(`/Accounts/${userId}/Profile`)
  }
}
