<style lang="scss" scoped></style>

<template>
  <div class="request-call">
    <v-container>
      <DoctorPrice />

      <ChargeInfo v-if="doctor.isCurrentlyAvailable" class="mt-9" />
      <div v-else ref="formWrapper">
        <FormCall @submit="onFormSubmit" />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import DoctorPrice from './DoctorPrice/DoctorPrice.vue'
import ChargeInfo from './ChargeInfo/ChargeInfo.vue'
import FormCall from './FormCall/FormCall.vue'
import { Doctor } from '~/models/Doctor'

@Component({
  components: {
    DoctorPrice,
    ChargeInfo,
    FormCall,
  },
})
export default class RequestCall extends Vue {
  @Prop()
  doctor!: Doctor
  async onFormSubmit(message: string) {
    let loader = this.$loader.show(this.$refs.formWrapper)
    try {
      await this.$service.doctors.callbackRequest({
        DoctorSubscriberNumber: this.$route.params.id,
        Message: message,
        loginOrigin: localStorage.getItem('referrer'),
      })
      // let { data } = await this.$axios.$post(
      //   `/api/calls/WebsiteCallRequest`,
      //   {
      //     DoctorSubscriberNumber: this.$route.params.id,
      //     Message: this.message,
      //     loginOrigin: localStorage.getItem("referrer")
      //   }
      // );
      this.$toast.success().showSimple('درخواست تماس با موفقیت ثبت شد')
    } catch (error) {
      this.$toast
        .error()
        .showSimple('مشکلی رخ داده است لطفا با پشتیبانی تماس بگیرید')
    }
    loader.hide()
  }
}
</script>
