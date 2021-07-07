<style lang="scss" scoped>
.faq-wrapper {
  margin-top: 100px;
}
</style>

<template>
  <div class="promotion-wrapper" ref="wrapper">
    <template v-if="!$fetchState.pending">
      <HeaderPromotion :category="category" />
      <PromotionDoctorListMobile
        :doctors="related_doctors"
        :totalItems="totalItems"
        @pageChange="onPageChange"
        v-if="$device.isMobile"
        class="doctor-list-wrapper"
      />
      <PromotionDoctorListDesktop
        class="doctor-list-wrapper"
        :category="category"
        :doctors="related_doctors"
        :totalItems="totalItems"
        @pageChange="onPageChange"
        v-else
      />
      <v-container>
        <div class="custom-container">
          <Description :content="category.seoContents" />
        </div>
      </v-container>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HeaderPromotion from '@/components/Pages/Promotion/Header/HeaderPromotion.vue'
import Description from '@/components/Pages/Category/Description.vue'
Component.registerHooks(['fetch'])
@Component({
  components: {
    HeaderPromotion,
    Description,
    PromotionDoctorListMobile: () =>
      import(
        '@/components/Pages/Promotion/DoctorList/Mobile/PromotionDoctorListMobile.vue'
      ),
    PromotionDoctorListDesktop: () =>
      import(
        '@/components/Pages/Promotion/DoctorList/Desktop/PromotionDoctorListDesktop.vue'
      ),
  },
})
export default class PromotionPage extends Vue {
  limit = 6
  offset = 0
  category: any = {}
  related_doctors = []
  requestId = null
  totalItems = 0
  title = ''
  description = ''
  main_schema: any = {}
  doctors_schema: any = {}
  faq_schema: any = {}

  head() {
    return {
      title: this.title,
      __dangerouslyDisableSanitizers: ['script'],
      // link: [
      //   {
      //     rel: 'canonical',
      //     href: `${
      //       process.env.SITE_URL
      //     }/categories/${this.category.englishTitle
      //       .toLowerCase()
      //       .replace(/ /g, '-')}/${this.category.id}`,
      //   },
      // ],
      script: [
        {
          innerHTML: JSON.stringify(this.main_schema),
          type: 'application/ld+json',
        },
        {
          innerHTML: JSON.stringify(this.doctors_schema),
          type: 'application/ld+json',
        },
        {
          innerHTML: JSON.stringify(this.faq_schema),
          type: 'application/ld+json',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        ...(this.noIndex
          ? [
              {
                hid: 'robots',
                name: 'robots',
                property: 'robots',
                content: 'noindex',
              },
            ]
          : []),
      ],
    }
  }
  get noIndex() {
    return +this.$route.params.id == 1144
  }
  async fetch() {
    try {
      let category_id =
        this.$store.state.category.items[this.$route.params.speciality]

      let { result } = await this.$axios.$get(`categories/${category_id}`)
      this.category = result.manifest
      if (
        this.category.englishTitle.toLowerCase().replace(/ /g, '-') !==
        this.$route.params.name
      ) {
      }
    } catch (error) {}
    try {
      await this.getDoctors()
    } catch (error) {}
    this.title = this.category.pageHeaderTitle || this.category.title
    this.description = `دریافت ${
      this.category.pageHeaderTitle || this.category.title
    } فقط در سامانه رسا، با کمترین هزینه، بدون دریافت نوبت، بدون رفت و آمد، بدون انتظار و با بهترین مشاوران`
    this.main_schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'سامانه رسا',
          item: 'https:/resaa.net',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: this.category.englishTitle.toLowerCase().replace(/ /g, '-'),
          item: `https://resaa.net/doctors/${this.$route.params.speciality}/`,
        },
      ],
    }
    this.doctors_schema = {
      '@context': 'http://schema.org',
      '@type': 'ItemList',
      name: `لیست متخصصین ${this.category.title}`,
      itemListElement: this.related_doctors.map((doctor: any, key) => {
        return {
          '@type': 'ListItem',
          position: key + 1,
          url: `https://resaa.net/doctors/${doctor.specialtyEnglishTitle
            .toLowerCase()
            .replace(/ /g, '-')}/${doctor.subscriberNumber}`,
          // item: {
          //   url: `https://resaa.net/doctors/${doctor.specialtyEnglishTitle
          //     .toLowerCase()
          //     .replace(/ /g, "-")}/${doctor.subscriberNumber}`,
          //   name: `${doctor.fullNameWithTitle}`,
          //   image: {
          //     "@type": "ImageObject",
          //     url: `https://webapi.resaa.net/Doctors/${doctor.subscriberNumber}/Image`
          //   }
          // }
        }
      }),
    }
    this.faq_schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.category.seoContents.map((item: any) => {
        return {
          '@type': 'Question',
          name: item.title.replace(/<\/?[a-z0-9]+>/g, ''),
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.description,
          },
        }
      }),
    }
  }

  async getDoctors() {
    let loader: any
    if (process.browser) {
      loader = this.$loader.show(this.$refs.wrapper)
    }
    let { result } = await this.$service.categories.RelatedDoctors(
      this.category.id,
      {
        limit: this.limit,
        offset: this.offset,
        requestId: this.requestId,
      }
    )
    this.related_doctors = result.relatedDoctors
    this.totalItems = result.relatedDoctorsTotalCount
    this.requestId = result.requestId
    if (process.browser) {
      loader.hide()
      this.$vuetify.goTo('.doctor-list-wrapper', { offset: 100, duration: 500 })
    }
  }

  onPageChange(page: number) {
    this.offset = this.limit * page - 1
    this.getDoctors()
  }
}
</script>
