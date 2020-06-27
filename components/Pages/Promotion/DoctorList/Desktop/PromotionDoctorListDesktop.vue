<style lang="scss" scoped>
.promotion-wrapper {
  main {
    width: calc(100% - 345px);
  }
  aside {
    width: 320px;
    padding-top: 24px;
  }
  ::v-deep {
    .section-testimonial {
      background-color: transparent;
    }
    .feature-type-one {
      padding-top: 20px;
      background-color: #fff;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      .v-card {
        box-shadow: none;
        .innder-title {
          flex-direction: row !important;
          .label {
            margin-right: 10px;
          }
        }
        .content {
          align-items: flex-start !important;
          .desc {
            text-align: right !important;
            padding-right: 35px;
          }
        }
      }
      .main-title {
        text-align: right !important;
        padding-right: 16px;
      }
    }
  }
}
</style>

<template>
  <div class="promotion-wrapper">
    <v-container class="d-flex justify-space-between">
      <main>
        <div class="doctors-list d-flex flex-column align-end">
          <template v-for="(item, index) in components">
            <component :doctor="item.data" :is="item.component" :key="index" class="mt-6" />
          </template>
        </div>

        <div class="pagination-wrapper text-left mt-8">
          <v-pagination v-model="page" :length="100" :circle="false" :total-visible="10" />
        </div>
      </main>

      <aside>
        <FeatureTypeOne />
        <TestimonialTypeOne class="mt-6" />
      </aside>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Doctor from '@/components/Common/Doctor/Doctor.vue'
import FeatureTypeOne from '@/components/Widgets/FeatureTypeOne/FeatureTypeOne.vue'
import TestimonialTypeOne from '@/components/Widgets/TestimonialTypeOne/TestimonialTypeOne.vue'
import SectionTestimonial from '@/components/Pages/Home/SectionTestimonial/SectionTestimonial.vue'
import SectionFeatureTwo from '@/components/Pages/Home/SectionFeatures/SectionFeatureTwo.vue'

@Component({
  components: {
    FeatureTypeOne,
    SectionTestimonial,
    SectionFeatureTwo,
    TestimonialTypeOne,
  },
})
export default class PromotionDoctorListDesktop extends Vue {
  @Prop()
  doctors!: Doctor[]
  get components() {
    const doctors: any = this.doctors.map(item => ({
      component: Doctor,
      data: item,
    }))

    doctors.splice(2, 0, {
      component: SectionFeatureTwo,
      data: null,
    })

    return doctors
  }

  page = 1
}
</script>
