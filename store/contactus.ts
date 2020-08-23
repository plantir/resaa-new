import { Action, Module, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'contactus',
})
export default class Index extends VuexModule {
  support = { text: '۰۲۱ - ۷۴ ۴۷ ۱۳ ۰۰', value: '02174471300' }
  doctor_support = { text: '۰۲۱ - ۷۴ ۴۷ ۱۲ ۰۰', value: '02174471200' }
  address =
    'تهران . امیرآباد شمالی . پایین تر از بیمارستان قلب . کوچه گردآفرید . خیابان هیئت . پلاک 15 . واحد 211   پارک علم و فناوری دانشگاه تربیت مدرس'
  email = 'info@resaa.net'
}
