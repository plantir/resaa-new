<style lang="scss" scoped></style>

<template>
  <div class="request-call">
    <v-container>
      <DoctorPrice />

      <ChargeInfo v-if="true" class="mt-9" />
      <FormCall v-else class="mt-9" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DoctorPrice from './DoctorPrice/DoctorPrice.vue'
import ChargeInfo from './ChargeInfo/ChargeInfo.vue'
import FormCall from './FormCall/FormCall.vue'

@Component({
  components: {
    DoctorPrice,
    ChargeInfo,
    FormCall,
  },
})
export default class RequestCall extends Vue {}
</script>
