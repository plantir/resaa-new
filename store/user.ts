import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'user',
  namespaced: true,
})
export default class User extends VuexModule {
  user = 'armin'
  isDark = false

  @Mutation
  SET_USER(user: any) {
    this.user = user
  }

  @Action
  setUser(user: string) {
    this.user = user
    return this.user
  }
}
