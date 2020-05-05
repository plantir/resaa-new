import { Module, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'user',
  namespaced: true
})
export default class User extends VuexModule {
  name = 'armin'
  isDark = false
}
