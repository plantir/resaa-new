import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { IResponse } from '~/@types/service'
import { ResultDenominations, ResultInvoice } from '~/models/Charge'
interface IDiscountParams {
  discountCode: string
  phoneNumber: string
  amount: number
}
export default class AuthService {
  constructor(public $axios: NuxtAxiosInstance) {}

  getChargeMenu(): Promise<IResponse<ResultDenominations>> {
    return this.$axios.$get('/Charge/Denominations')
  }

  getPreInvoice(payload: any): Promise<IResponse<ResultInvoice>> {
    return this.$axios.$post('/Charge', payload)
  }

  validateDiscount(params: IDiscountParams) {
    return this.$axios.$get('/ChargeDiscountCard/IsValid', { params })
  }
}
