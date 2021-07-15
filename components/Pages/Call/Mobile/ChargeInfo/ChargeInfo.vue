<style lang="scss" scoped>
.charge-info {
  font-size: 12px;
  color: #212121;
  font-weight: 500;
  .price {
    color: #f9a429;
  }

  .submit {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    background-color: #fff;
    line-height: 64px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
    .right {
      font-size: 10px;
      font-weight: bold;
      line-height: 20px;
      .tell {
        color: #f9a429;
      }
    }
  }
}
</style>

<template>
  <div class="charge-info">
    <div class="d-flex justify-space-between">
      <div class="label">اعتبار حساب شما:</div>
      <div class="price">{{ 3000 | currency | persianDigit }} تومان</div>
    </div>
    <div class="desc mt-3">اعتبار حساب شما برای یک تماس طولانی مناسب است.</div>
    <div class="increase-credit d-flex justify-space-between align-center mt-3">
      <div class="right">فکر می‌کنید به اعتبار بیشتری احتیاج دارید؟</div>
      <div class="left d-flex align-center mt-3">
        <nuxt-link class="ml-2" to="/charge">افزایش اعتبار</nuxt-link>
        <!-- <Icon fileName="ic_link_left.png" /> -->
        <v-img src="/images/icons/ic_link_left.png"></v-img>
      </div>
    </div>
    <div class="image d-flex align-center justify-center mt-9">
      <!-- <Icon fileName="img_direct_call.png" /> -->
      <v-img src="/images/icons/img_direct_call.png"></v-img>
    </div>

    <Faq class="mt-6" />

    <div class="submit">
      <v-container class="d-flex justify-space-between align-center">
        <div class="right d-flex flex-column">
          <span class="label">شماره تماس با پزشک:</span>
          <span class="tell">۰۲۱-۷۴۴۷۷۴۵۹</span>
        </div>
        <v-btn @click="onSubmit" dense>تماس با پزشک</v-btn>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'
import Faq from '@/components/Common/Faq/Faq.vue'

@Component({
  components: {
    Icon,
    Faq,
  },
})
export default class ChargeInfo extends Vue {
  onSubmit() {}
}
</script>
