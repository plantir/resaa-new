<style lang="scss" scoped>
span {
  font-size: 11px;
  line-height: 28px;
}
</style>

<template>
  <div class="help-block d-flex align-start">
    <Icon class="ml-2" fileName="ic_info.svg" />
    <span class="font-weight-bold text-justify">
      شماره موبایل شما نزد رسا امانت است و برای برقراری ارتباط با پزشک استفاده
      می‌شود. پزشک شماره تماس شما را نخواهد دید و هویت شما کاملا محرمانه می
      ماند.
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class ChargeHelpBlock extends Vue {}
</script>
