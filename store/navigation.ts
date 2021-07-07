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
      icon: 'la-home',
    },
    {
      label: 'تخصص‌ها',
      link: '/specialties',
      internalLink: true,
      newTab: false,
      icon: 'la-briefcase',
    },
    {
      label: 'لیست پزشکان و روانشناسان',
      link: '/doctors',
      internalLink: true,
      newTab: false,
      icon: 'la-user-nurse',
    },
    {
      label: 'مقالات',
      link: 'https://blog.resaa.net',
      internalLink: false,
      newTab: true,
      icon: 'la-blog',
    },
    {
      label: 'سوالات متداول',
      link: '/faq',
      internalLink: true,
      newTab: false,
      icon: 'la-question',
    },
  ]
}
