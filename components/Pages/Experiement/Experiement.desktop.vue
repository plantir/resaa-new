<style lang="scss" scoped></style>
<template>
  <section>
    <v-layout row class="mx-2">
      <v-flex sm9>
        <UploadImage />
        <DescriptionImages />
      </v-flex>
      <v-flex sm3>
        <Info :doctorInfo="doctorInfo" />
      </v-flex>
    </v-layout>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
import Info from './Desktop/Info.vue'
import UploadImage from './Desktop/UploadImage.vue'
import DescriptionImages from './Desktop/DescriptionImages.vue'

@Component({
  components: {
    Info,
    UploadImage,
    DescriptionImages,
  },
})
export default class YourComponent extends Vue {
  @Prop({
    type: Object,
  })
  readonly doctorInfo!: Object
}
</script>
