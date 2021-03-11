<style lang="scss" scoped>
.request-call {
  padding: 24px 30px 0;
}
.info-doctor {
  margin: 0;
}
</style>

<template>
  <div class="request-call">
    <v-row>
      <v-col md="3" class="ml-10">
        <InfoDoctor :doctor="doctor" class="info-doctor" />
      </v-col>
      <v-col md="8">
        <ChargeInfo v-if="false" />
        <FormCall v-else />
        <Faq />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ChargeInfo from './ChargeInfo/ChargeInfo.vue'
import FormCall from './FormCall/FormCall.vue'
import InfoDoctor from '@/components/Pages/Doctors/Profile/Desktop/Info.vue'
import { Doctor } from '../../../../models/Doctor'
import Faq from '@/components/Common/Faq/Faq.vue'
@Component({
  components: {
    ChargeInfo,
    FormCall,
    InfoDoctor,
    Faq,
  },
})
export default class RequestCall extends Vue {
  @Prop()
  doctor!: Doctor
}
</script>
