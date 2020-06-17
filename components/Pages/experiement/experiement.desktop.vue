<style lang="scss" scoped></style>
<template>
  <section>
    <v-layout row class="mx-2">
      <v-flex sm9>
        <uploadImage />
        <descriptionImages />
      </v-flex>
      <v-flex sm3>
        <info />
      </v-flex>
    </v-layout>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import info from './desktop/info.vue'
import uploadImage from './desktop/uploadImage.vue'
import descriptionImages from './desktop/descriptionImages.vue'

@Component({
  components: {
    info,
    uploadImage,
    descriptionImages,
  },
})
export default class YourComponent extends Vue {}
</script>
