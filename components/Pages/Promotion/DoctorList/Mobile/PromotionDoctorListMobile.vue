<style lang="scss" scoped>
.promotion-wrapper {
  padding: 12px;
  // width: calc(100% - 270px);
  ::v-deep {
    .section-testimonial {
      background-color: transparent;
    }
  }
}
</style>

<template>
  <div class="promotion-wrapper">
    <v-container>
      <div class="doctors-list d-flex flex-column align-end">
        <template v-for="(item, index) in components">
          <component :is="item.component" :key="index" class="mt-6" />
        </template>
      </div>

      <div class="pagination-wrapper mt-8">
        <v-pagination v-model="page" :length="100" :circle="false" :total-visible="10" />
      </div>
    </v-container>

    <SectionTestimonial title="چگونه دیگران از رسا سود برده‌اند؟" />
    <SectionFeatureTwo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Doctor from '@/components/Common/Doctor/Doctor.vue'
import FeatureTypeOne from '@/components/Widgets/FeatureTypeOne/FeatureTypeOne.vue'
import SectionTestimonial from '@/components/Pages/Home/SectionTestimonial/SectionTestimonial.vue'
import SectionFeatureTwo from '@/components/Pages/Home/SectionFeatures/SectionFeatureTwo.vue'

@Component({
  components: {
    SectionTestimonial,
    SectionFeatureTwo,
  },
})
export default class PromotionDoctorListMobile extends Vue {
  doctors: Array<any> = [1, 2, 3, 4, 5]

  get components() {
    const doctors = this.doctors.map(item => ({
      component: Doctor,
      data: item,
    }))

    doctors.splice(2, 0, {
      component: FeatureTypeOne,
      data: null,
    })

    return doctors
  }

  page = 1
}
</script>
