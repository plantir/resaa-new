<style lang="scss" scoped></style>
<template>
  <section>
    <v-layout row>
      <v-flex sm3>
        <infoDoctor />
      </v-flex>
      <v-flex sm9>
        <medicalRecords />
        <doctorServices />
        <accessibility />
        <otherDoctors />
        <comments />
      </v-flex>
    </v-layout>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import infoDoctor from './desktop/info.vue'
import medicalRecords from './desktop/medicalRecords.vue'
import doctorServices from './desktop/doctorServices.vue'
import accessibility from './desktop/accessibility.vue'
import otherDoctors from './desktop/otherDoctors.vue'
import comments from './desktop/comments.vue'
@Component({
  components: {
    infoDoctor,
    medicalRecords,
    doctorServices,
    accessibility,
    otherDoctors,
    comments,
  },
})
export default class YourComponent extends Vue {
  items = null
}
</script>
