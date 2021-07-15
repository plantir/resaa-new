<style lang="scss" scoped></style>

<template>
  <v-img
    :src="src"
    :lazy-src="src"
    :alt="alt"
    :height="height"
    :width="width"
    :aspect-ratio="aspectRatio"
    :max-width="maxWidth"
    :min-width="minWidth"
    :max-height="maxHeight"
    :min-height="minHeight"
    class="grey lighten-2"
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          width="2"
          indeterminate
          color="secondary"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ImageLoader extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly src!: String

  @Prop({
    type: String,
    required: true,
  })
  readonly alt!: String

  @Prop({
    type: [String, Number],
  })
  readonly height!: [String, Number]

  @Prop({
    type: [String, Number],
  })
  readonly width!: [String, Number]

  @Prop({
    type: [String, Number],
  })
  readonly maxHeight!: [String, Number]

  @Prop({
    type: [String, Number],
  })
  readonly minHeight!: [String, Number]

  @Prop({
    type: [String, Number],
  })
  readonly maxWidth!: [String, Number]

  @Prop({
    type: [String, Number],
  })
  readonly minWidth!: [String, Number]

  @Prop({
    type: Number,
    default: 1,
  })
  readonly aspectRatio!: Number

  @Prop({
    type: Boolean,
    default: false,
  })
  readonly contain!: Boolean
}
</script>
