const items = require('../related_categories')
import { Action, Module, VuexModule } from 'vuex-module-decorators'
@Module({
  name: 'category',
})
export default class CategoryStore extends VuexModule {
  items = items
  //   get items() {
  //     return items
  //   }
}
