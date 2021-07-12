<style lang="scss" scoped>
</style>

<template>
  <v-img :width="width" :height="height" src="/images/logo.png" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Logo extends Vue {
  @Prop({
    default: '90px',
  })
  width!: string
  @Prop({
    default: '50px',
  })
  height!: string
}
</script>
