<template>
  <v-img :width="width" :src="src" :alt="fileName" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  @Prop({ type: String, required: true }) readonly fileName!: String

  @Prop({
    default: 48,
  })
  size!: string | number

  get width() {
    if (this.size.toString().includes('px')) {
      return this.size
    }
    return this.size + 'px'
  }
  get src() {
    return `/images/icons/${this.fileName}`
  }
}
</script>
