<style lang="scss" scoped>
.info-doctor {
  margin: 0;
}
</style>

<template>
  <div class="request-call">
    <v-container>
      <v-row class="mt-5">
        <v-col cols="3">
          <InfoDoctor :doctor="doctor" class="info-doctor" />
        </v-col>
        <v-col cols="9">
          <ChargeInfo v-if="false" class="mt-9" />
          <FormCall v-else class="mt-9" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ChargeInfo from './ChargeInfo/ChargeInfo.vue'
import FormCall from './FormCall/FormCall.vue'
import InfoDoctor from '@/components/Pages/Doctors/Profile/Desktop/Info.vue'
import { Doctor } from '../../../../models/Doctor'

@Component({
  components: {
    ChargeInfo,
    FormCall,
    InfoDoctor,
  },
})
export default class RequestCall extends Vue {
  @Prop()
  doctor!: Doctor
}
</script>
