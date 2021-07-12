<template>
  <v-img :width="width" :height="height" :src="src" :alt="fileName" />
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

  @Prop({
    default: '1:1',
  })
  ratio!: string

  get width() {
    if (this.size.toString().includes('px')) {
      return this.size
    }
    return this.size + 'px'
  }

  get height() {
    let [w, h] = this.ratio.split(':')
    let size = (+h / +w) * +this.size
    return size + 'px'
  }

  get src() {
    return `/images/icons/${this.fileName}`
  }
}
</script>
