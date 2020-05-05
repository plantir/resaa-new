import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { User } from '~/models/User'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}
  test(): Promise<User> {
    return this.$axios.$get(`/`)
  }
}
