<style lang="scss" scoped>
.call-success-wrapper {
  position: relative;

  ::v-deep {
    .container {
      @include media(sm) {
        max-width: 600px;
      }
    }
    .bottom-background {
      position: absolute;
      bottom: auto;
      top: 0;
      z-index: 1;
      transform: rotate(180deg);
      height: 140px !important;
      @include media(sm) {
        height: 400px !important;
      }
    }

    .call-btn.theme--light {
      background-image: none;
      background: #e1e2e1 !important;
      box-shadow: none !important;
      .v-btn__content {
        font-weight: bold;
        color: #707070 !important;
      }
    }

    .card-timer {
      @include media(sm) {
        max-width: 415px;
        margin-top: 170px !important;
      }
    }

    .back {
      @include media(sm) {
        min-width: auto !important;
      }
    }
  }
}
</style>

<template>
  <div class="call-success-wrapper">
    <BottomBackground />
    <v-container class="d-flex flex-column align-center">
      <CardTimer
        class="mt-9"
        title="درخواست رزرو تماس شما با موفقیت ثبت شد"
        desc="پزشک با شماره ۷۴۴۷۷۴۵۹ - ۰۲۱ در ۲۴ ساعت آینده تماس خواهد گرفت در صورتی که
      در دسترس نباشید، از اعتبار شما کسر نمی‌شود."
      >
        <v-btn block class="call-btn mt-5">پیگیری تماس</v-btn>
      </CardTimer>

      <v-btn block outlined class="back mt-6">بازگشت به صفحه اصلی</v-btn>

      <Faq class="mt-8" />
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardTimer from '@/components/Common/CardTimer/CardTimer.vue'
import Faq from '@/components/Common/Faq/Faq.vue'
import BottomBackground from '@/components/Common/BottomBackground/BottomBackground.vue'

@Component({
  components: {
    BottomBackground,
    CardTimer,
    Faq,
  },
})
export default class CallSuccessPage extends Vue {}
</script>
