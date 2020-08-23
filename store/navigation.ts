import { Action, Module, VuexModule } from 'vuex-module-decorators'
import { MainMenu } from '~/models/MainMenu'

@Module({
  name: 'navigation',
})
export default class Index extends VuexModule {
  items: MainMenu[] = [
    {
      label: 'خانه',
      link: '/',
      internalLink: true,
      newTab: false,
    },
    {
      label: 'تخصص‌ها',
      link: '/specialties',
      internalLink: true,
      newTab: false,
    },
    {
      label: 'لیست پزشکان و روانشناسان',
      link: '/doctors',
      internalLink: true,
      newTab: false,
    },
    {
      label: 'مقالات',
      link: 'https://blog.resaa.net',
      internalLink: false,
      newTab: true,
    },
    {
      label: 'سوالات متداول',
      link: '/faq',
      internalLink: true,
      newTab: false,
    },
  ]
}
