import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'user',
  namespaced: true,
})
export default class User extends VuexModule {
  name = 'armin'
  isDark = false

  @Mutation
  SET_name(name: any) {
    this.name = name
  }

  @Action
  setname(name: string) {
    this.SET_name(name)
    return this.name
  }
}
