<style lang="scss" scoped></style>
<template>
  <section>
    <template v-if="$fetchState.pending">
      <AppSkeleton section="DoctorProfile" class="mt-6" />
    </template>
    <template v-else>
      <DoctorProfileDesktop :doctor="doctor" v-if="$device.isDesktop" />
      <DoctorProfileMobile :doctor="doctor" v-if="$device.isMobileOrTablet" />
    </template>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
import { Doctor } from '../../../../models/Doctor'
Component.registerHooks(['fetch', 'head'])
@Component({
  components: {
    DoctorProfileDesktop: () =>
      import('@/components/Pages/Doctors/Profile/DoctorProfile.desktop.vue'),
    DoctorProfileMobile: () =>
      import('@/components/Pages/Doctors/Profile/DoctorProfile.mobile.vue'),
  },
})
export default class YourComponent extends Vue {
  title!: string
  schema!: any
  og: any = {}
  description!: any
  doctor: any = {}
  asyncData() {
    return { title: null, doctor: null }
  }
  head() {
    return {
      title: this.title,
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify(this.schema),
          type: 'application/ld+json',
        },
      ],
      link: [{ rel: 'canonical', href: this.og.canonical }],
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.og.image,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.og.title,
        },

        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.og.site_name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.og.description,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
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
