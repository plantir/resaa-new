<template>
  <nav class="main-menu">
    <ul class="d-flex">
      <MenuItem v-for="(item, index) in mainMenu" :key="index" :menu="item" />
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { MainMenu } from '@/models/MainMenu'
import MenuItem from './MenuItem.vue'

@Component({
  components: {
    MenuItem,
  },
})
export default class extends Vue {
  @Prop({ type: Array, required: true })
  readonly mainMenu!: MainMenu[]
}
</script>

<style lang="scss" scoped></style>
