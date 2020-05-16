<style lang="scss" scoped>
.bottom-background {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-image: linear-gradient(270deg, #13d1f3, #35d6c1);
  clip-path: ellipse(200% 100% at 50% 100%);
  @include media(sm) {
    clip-path: ellipse(100% 100% at 50% 100%);
  }
}
</style>

<template>
  <div
    class="bottom-background"
    :style="{
      height: height + 'px',
    }"
  ></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class BottomBackground extends Vue {
  @Prop({
    type: String,
    default: 400,
  })
  readonly height!: String
}
</script>
