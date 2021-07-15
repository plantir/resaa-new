<style lang="scss" scoped>
.faq {
  .main-title {
    font-size: 16px;
    font-weight: 600;
    position: relative;
    line-height: 50px;
    color: #212121;
    &::before {
      background-color: #e6e6e6;
      height: 2px;
      width: 100%;
      content: '';
      position: absolute;
      bottom: 0;
    }
    &::after {
      background-color: #f9a429;
      height: 4px;
      width: 60px;
      content: '';
      position: absolute;
      bottom: -1px;
      right: 0;
    }
  }
}
</style>

<template>
  <div class="faq">
    <div class="main-title">
      پاسخ سوالاتی که ممکن است برایتان پیش بیاید.
    </div>
    <div class="list d-flex flex-column mt-5">
      <FaqItem v-for="(item, index) in items" :key="index" :faq="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FaqItem from './FaqItem.vue'

@Component({
  components: {
    FaqItem,
  },
})
export default class Faq extends Vue {
  items = [
    {
      icon: 'ic_cashback.png',
      text:
        'در صورت عدم رضایت شما از تماس، تمامی هزینه به حساب شما بازگردانده می‌شود.',
    },
    {
      icon: 'ic_successful_call.png',
      text:
        'در صورت عدم برقراری یا قطعی تماس در لحظات ابتدایی مکالمه، هزینه‌ای از حساب شما کسر نمی‌گردد.',
    },
    {
      icon: 'ic_timer.png',
      text:
        'هزینه مشاوره، بر حسب دقیقه محاسبه می‌شود و باقیمانده اعتبار شما در تماس‌های بعدی قابل استفاده است.',
    },
    {
      icon: 'ic_select.png',
      text:
        'شما می‌توانید با اعتباری که خریداری می‌کنید، با هر پزشک یا مشاور رسا که بخواهید صحبت کنید.',
    },
    {
      icon: 'ic_checked.png',
      text:
        'است و پرداخت شما از طریق درگاه امن بانکی انجام می شود e-namad رسا دارای گواهی اعتماد الکترونیکی.',
    },
    {
      icon: 'ic_support.png',
      text: 'پشتیبانی رسا در کلیه مراحل استفاده از سامانه در کنار شماست.',
    },
  ]
}
</script>
