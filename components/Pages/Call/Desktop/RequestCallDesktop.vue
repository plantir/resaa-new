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
        <ChargeInfo v-if="doctor.isCurrentlyAvailable" />
        <div v-else ref="formWrapper">
          <FormCall @submit="onFormSubmit" />
        </div>
        <Faq />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
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
