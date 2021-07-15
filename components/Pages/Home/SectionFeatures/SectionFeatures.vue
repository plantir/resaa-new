<style lang="scss" scoped></style>

<template>
  <div class="features">
    <SectionFeatureOne :doctors="doctors" />
    <SectionFeatureTwo />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import SectionFeatureOne from './SectionFeatureOne.vue'
import SectionFeatureTwo from './SectionFeatureTwo.vue'
import { Doctor } from '../../../../models/Doctor'

@Component({
  components: {
    SectionFeatureOne,
    SectionFeatureTwo,
  },
})
export default class SectionFeatures extends Vue {
  @Prop()
  doctors!: Doctor[]
}
</script>
