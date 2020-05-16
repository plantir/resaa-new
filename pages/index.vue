<style lang="scss" scoped></style>
<template>
  <div>
    Home
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import logoComponent from '~/assets/svg/logo.svg?inline'

Component.registerHooks(['fetch', 'head'])

@Component({
  components: {
    logoComponent,
  },
})
export default class HomePage extends Vue {
  public head() {
    return {
      title: 'سامانه رسا',
      bodyAttrs: {
        class: 'page-home',
      },
    }
  }
}
</script>
