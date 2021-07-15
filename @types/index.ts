import AuthService from '@/services/auth'
import ChargeService from '@/services/charge'
import ProfileService from '@/services/profile'
import CallbookSurveyService from '~/services/callbookSurveys'
import CategoryService from '~/services/categories'
import DoctorService from '~/services/doctors'
import MetadataService from '~/services/metadata'
import PricingService from '~/services/pricing'
import TestimonialsService from '~/services/testimonials'
import WeblogService from '~/services/weblog'
interface IEnum {
  toSelect: { text: string; value: number }[]
}
interface Storage {
  setState(key: string, val: any): void
  getState(key: string): any
  watchState(key: string, callback: (newValue: any) => any): void
  setCookie(key: string, val: any, isJson?: boolean): void
  getCookie(key: string): any
  setLocalStorage(key: string, val: any, isJson?: boolean): void
  getLocalStorage(key: string): any
  removeLocalStorage(key: string): any
  setUniversal(key: string, val: any, isJson?: boolean): void
  getUniversal(key: string, isJson?: boolean): any
  syncUniversal(key: string, val: any, isJson?: boolean): void
  removeUniversal(key: string): any
}
interface Auth {
  user?: Object | any
  loggedIn: boolean
  $storage: Storage
  loginWith(strategy: string, date: any): Promise<any>
  login(): Promise<any>
  setUser(user: any): void
  getToken(strategy: string): string
  setToken(strategy: string, token: string): void
  setUserToken(token: string): Promise<any>
  fetchUser(): Promise<any>
  hasScope(role: string): boolean
  logout(): void
  onError(callback: (error: string, name: string, endpoin: string) => any): void
  onRedirect(callback: (to: Object, from: Object) => any): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: Auth
    $storage: Storage
  }
  interface Context {
    $auth: Auth
    $storage: Storage
  }
  interface NuxtAppOptions {
    $auth: Auth
    $storage: Storage
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    auth: AuthService
    profile: ProfileService
    charge: ChargeService
    doctors: DoctorService
    weblog: WeblogService
    testimonials: TestimonialsService
    pricing: PricingService
    callbookSurveys: CallbookSurveyService
    categories: CategoryService
    metadata: MetadataService
  }
  interface NuxtEnumInstance {
    role: IEnum
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V> {
    auth?: string | boolean
  }
}
