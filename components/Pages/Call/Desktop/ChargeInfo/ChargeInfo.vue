<style lang="scss" scoped>
.charge-info {
  .charge-wrapper {
    font-size: 15px;
    color: #212121;
    font-weight: bold;
    .price {
      color: #f9a429;
    }
  }

  .tell {
    .value {
      font-size: 14px;
      color: #f9a429;
    }
  }
}
</style>

<template>
  <div class="charge-info">
    <div class="charge-wrapper d-flex flex-column align-center justify-center">
      <div class="charge">
        اعتبار حساب شما
        <span class="price">{{ 3000 | currency | persianDigit }} تومان</span> و
        برای یک تماس طولانی، مناسب است.
      </div>

      <div class="increase-credit d-flex align-center mt-3">
        <div class="right ml-4">فکر می‌کنید به اعتبار بیشتری احتیاج دارید؟</div>
        <div class="left d-flex align-center mt-3">
          <nuxt-link class="ml-2" to="call/charge"> افزایش اعتبار </nuxt-link>
          <Icon fileName="ic_link_left.png" />
        </div>
      </div>

      <div class="tell d-flex flex-column align-center justify-center mt-9">
        <Icon fileName="ic_tell_large.png" />
        <div class="label mt-4">تماس با پزشک</div>
        <div class="value mt-2">۰۲۱-۷۴۴۷۷۴۵۹</div>
      </div>

      <div class="image d-flex align-center justify-center mt-9">
        <Icon fileName="img_direct_call.png" />
      </div>
    </div>

    <Faq class="mt-9" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'
import Faq from '@/components/Common/Faq/Faq.vue'
import BottomBackground from '../../../../Common/BottomBackground/BottomBackground.vue'

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
