<style lang="scss" scoped>
.faq-wrapper {
  margin-top: 100px;
}
</style>

<template>
  <div class="promotion-wrapper">
    <HeaderPromotion />

    <PromotionDoctorListMobile v-if="$device.isMobile" />
    <PromotionDoctorListDesktop v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HeaderPromotion from '@/components/Pages/Promotion/Header/HeaderPromotion.vue'

@Component({
  components: {
    HeaderPromotion,
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
  public head() {
    return {
      title: 'Promotion',
      bodyAttrs: {
        class: 'page-promotion',
      },
    }
  }
}
</script>
