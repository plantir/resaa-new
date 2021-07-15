<template>
  <nav class="main-menu">
    <ul class="d-flex">
      <MenuItem v-for="(item, index) in mainMenu" :key="index" :menu="item" />
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { MainMenu as MainMenuModel } from '@/models/MainMenu'
import MenuItem from './MenuItem.vue'

@Component({
  components: {
    MenuItem,
  },
})
export default class MainMenu extends Vue {
  @Prop({ type: Array, required: true })
  readonly mainMenu!: MainMenuModel[]
}
</script>

<style lang="scss" scoped></style>
