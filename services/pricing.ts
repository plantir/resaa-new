import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
const packages: Array<Object> = [
  {
    color: '#35d6c1',
    count: 3,
    name: 'تماس کوتاه',
    title: '۳ دقیقه مکامله',
    desc: ' مناسب برای پرسش و دریافت پاسخ ۲ سوال کوتاه',
    price: 9000,
  },
  {
    color: '#0bbad9',
    count: 4,
    name: 'تماس کوتاه',
    title: '۳ دقیقه مکامله',
    desc: ' مناسب برای پرسش و دریافت پاسخ ۲ سوال کوتاه',
    price: 9000,
  },
  {
    color: '#f9a429',
    count: 5,
    name: 'تماس کوتاه',
    title: '۳ دقیقه مکامله',
    desc: ' مناسب برای پرسش و دریافت پاسخ ۲ سوال کوتاه',
    price: 9000,
  },
  {
    color: '#c73260',
    count: 6,
    name: 'تماس کوتاه',
    title: '۳ دقیقه مکامله',
    desc: ' مناسب برای پرسش و دریافت پاسخ ۲ سوال کوتاه',
    price: 9000,
  },
]
export default class PricingService {
  constructor(public $axios: NuxtAxiosInstance) {}
  query(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      resolve(packages)
    })
  }
}
