import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { IResponse } from '~/@types/service'
import { ResultDenominations, ResultInvoice } from '~/models/Charge'

export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getChargeMenu(): Promise<IResponse<ResultDenominations>> {
    return this.$axios.$get('/Charge/Denominations')
  }

  getPreInvoice(payload: any): Promise<IResponse<ResultInvoice>> {
    return this.$axios.$post('/Charge', payload)
  }
}
