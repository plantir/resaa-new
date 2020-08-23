<style lang="scss" scoped>
.container {
  margin-top: 24px;
}
</style>
<template>
  <v-container>
    <v-layout row>
      <v-flex sm3 px-3>
        <InfoDoctor :doctor="doctor" />
      </v-flex>
      <v-flex sm9 px-3>
        <MedicalRecords :doctor="doctor" />
        <DoctorServices :doctor="doctor" />
        <!-- <Accessibility :doctor="doctor" /> -->
        <TimeTable :close="false" :doctor="doctor" />
        <OtherDoctors :doctor="doctor" />
        <Comments :doctor="doctor" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import InfoDoctor from './Desktop/Info.vue'
import MedicalRecords from './Desktop/MedicalRecords.vue'
import DoctorServices from './Desktop/DoctorServices.vue'
import Accessibility from './Desktop/Accessibility.vue'
import TimeTable from '@/components/Common/Doctor/TimeTable.vue'
import OtherDoctors from './Desktop/OtherDoctors.vue'
import Comments from './Desktop/Comments.vue'
import { Doctor } from '~/models/Doctor'
@Component({
  components: {
    InfoDoctor,
    MedicalRecords,
    DoctorServices,
    Accessibility,
    OtherDoctors,
    Comments,
    TimeTable,
  },
})
export default class YourComponent extends Vue {
  @Prop({ required: true })
  private doctor!: Doctor
}
</script>
