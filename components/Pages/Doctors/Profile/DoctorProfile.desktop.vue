<style lang="scss" scoped>
.container {
  margin-top: 24px;
}
.doctor-profile {
  padding: 0 30px;
}
.sticky {
  position: sticky;
  top: 150px;
}
</style>
<template>
  <v-container>
    <v-row>
      <v-col md="4" xl="3">
        <div class="sticky">
          <InfoDoctor :doctor="doctor" />
        </div>
      </v-col>
      <v-col md="8" xl="9">
        <MedicalRecords :doctor="doctor" />
        <DoctorServices :doctor="doctor" />
        <TimeTable :close="false" :doctor="doctor" />
        <OtherDoctors :doctor="doctor" />
        <Comments :doctor="doctor" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
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
