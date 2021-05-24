<style lang="scss" scoped>
.promotion-wrapper {
  padding: 12px;
  text-align: center;
  .v-pagination {
    margin: 0;
    padding: 0;
  }
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
          <component
            :is="item.component"
            :doctor="item.data"
            :key="index"
            class="mt-6"
          />
        </template>
      </div>

      <div class="pagination-wrapper mt-8">
        <v-pagination
          v-model="page"
          :length="totalPages"
          :circle="false"
          :total-visible="10"
        />
      </div>
    </v-container>

    <SectionTestimonial title="چگونه دیگران از رسا سود برده‌اند؟" />
    <WorkingWithResaa />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Doctor from '@/components/Common/Doctor/Doctor.vue'
import FeatureTypeOne from '@/components/Widgets/FeatureTypeOne/FeatureTypeOne.vue'
import SectionTestimonial from '@/components/Pages/Home/SectionTestimonial/SectionTestimonial.vue'
import WorkingWithResaa from '@/components/Pages/Promotion/WorkingWithResaa/WorkingWithResaa.vue'
@Component({
  components: {
    SectionTestimonial,

    WorkingWithResaa,
  },
})
export default class PromotionDoctorListMobile extends Vue {
  @Prop()
  doctors!: Array<any>
  @Prop()
  totalItems!: number

  get totalPages() {
    return Math.ceil(this.totalItems / 6)
  }
  get components() {
    const doctors: any = this.doctors.map((item) => ({
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
