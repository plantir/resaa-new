<style lang="scss" scoped></style>

<template>
  <div class="call-wrapper">
    <template v-if="!$fetchState.pending">
      <RequestCallMobile :doctor="doctor" v-if="$device.isMobile" />
      <RequestCallDesktop :doctor="doctor" v-else />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Doctor } from '~/models/Doctor'

Component.registerHooks(['fetch', 'head'])

@Component({
  components: {
    RequestCallMobile: () =>
      import('@/components/Pages/Call/Mobile/RequestCallMobile.vue'),
    RequestCallDesktop: () =>
      import('@/components/Pages/Call/Desktop/RequestCallDesktop.vue'),
  },
})
export default class CallPage extends Vue {
  doctor: any = {}
  title!: string
  schema!: any
  og: any = {}
  description!: any
  public head() {
    return {
      title: 'سامانه رسا',
      bodyAttrs: {
        class: 'page-call',
      },
    }
  }
  async fetch() {
    let [doctor, relatedDoctors] = await Promise.all([
      this.$service.doctors.get(this.$route.params.id),
      this.$service.doctors.relatedDoctors(this.$route.params.id),
    ]).then((values) => {
      return [values[0].result.doctor, values[1].result.relatedDoctors]
    })
    this.doctor = doctor
    this.doctor.relatedDoctors = relatedDoctors
    this.seoContent()
  }
  seoContent() {
    this.title = `${this.doctor.title || ''} ${this.doctor.firstName} ${
      this.doctor.lastName
    } | تماس مستقیم با پزشک در سامانه رسا`

    this.description = `با استفاده از سامانه رسا می توانید در کوتاه ترین زمان ممکن، مستقیما با ${
      this.doctor.title || ''
    } ${this.doctor.firstName}  ${this.doctor.lastName} متخصص ${
      this.doctor.specialtyTitle
    } تماس تلفنی برقرار کنید و به پاسخ سوالات خود برسید.`
    this.og = {
      image:
        'https://webapi.resaa.net/' + this.doctor.imagePath ||
        '/img/doc-placeholder.png',
      site_name: `سامانه رسا`,
      title: `${this.doctor.title || ''} ${this.doctor.firstName} ${
        this.doctor.lastName
      } - متخصص : ${this.doctor.specialtyTitle}`,
      description: `کد رسا:${this.doctor.subscriberNumber} - ${this.description}`,
      canonical: `${process.env.SITE_URL}/doctors/${(
        this.doctor.specialtyEnglishTitle || ''
      )
        .toLowerCase()
        .replace(/ /g, '-')}/${this.doctor.subscriberNumber}`,
    }
  }
}
</script>
