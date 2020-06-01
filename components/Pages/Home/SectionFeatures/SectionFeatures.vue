<style lang="scss" scoped></style>

<template>
  <div class="features">
    <SectionFeatureOne />
    <SectionFeatureTwo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SectionFeatureOne from './SectionFeatureOne.vue'
import SectionFeatureTwo from './SectionFeatureTwo.vue'

@Component({
  components: {
    SectionFeatureOne,
    SectionFeatureTwo,
  },
})
export default class SectionFeatures extends Vue {}
</script>
