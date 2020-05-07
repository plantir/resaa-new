import { Action, Module, VuexModule } from 'vuex-module-decorators'

@Module
export default class Index extends VuexModule {
  @Action
  nuxtClientInit() {}

  @Action
  nuxtServerInit(ctx: any) {
    const token = ctx.$auth.getToken('local')

    if (token) {
      const profile = ctx.$auth.$storage.getCookie('profile')
      ctx.$auth.setUser(profile)
      console.log('Index -> nuxtServerInit -> token', ctx.$auth.user)
    }
  }
}
