<style lang="scss" scoped></style>

<template>
  <client-only>
    <component v-bind:is="section" />
  </client-only>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import WeblogDesktop from './Sections/WeblogDesktop.vue'

@Component({
  components: {
    WeblogDesktop,
  },
})
export default class AppSkeleton extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly section!: String
}
</script>
