<style lang="scss" scoped>
.call-item {
  .item {
    .label {
      color: #707070;
      font-size: 11px;
    }
    .value {
      font-size: 13px;
    }
  }
  .rate-call {
    border: 2px dashed #35d6c1;

    border-top: none;
    @media (xs-only) {
      .desc {
        margin-bottom: 10px;
      }
    }
  }
}
</style>

<template>
  <div class="call-item d-flex flex-column">
    <!-- info-call -->
    <v-card class="pa-4">
      <div class="info-call d-flex justify-space-between">
        <v-avatar size="64" tile>
          <img src="/images/avatar/1.jpg" alt="alt" />
        </v-avatar>

        <div class="item name d-flex flex-column">
          <div class="label font-weight-bold">نام متخصص</div>
          <div class="value font-weight-bold mt-2">دکتر مهیا ملکی</div>
        </div>

        <div class="item name d-none d-sm-flex flex-column">
          <div class="label font-weight-bold">تاریخ ارسال آزمایش</div>
          <div class="value font-weight-bold mt-2">۱۲ فروردین ۱۳۹۹</div>
        </div>

        <div class="item name d-flex flex-column">
          <div class="label font-weight-bold">وضعیت آزمایش</div>
          <div class="value font-weight-bold mt-2 orange--text">در انتظار پاسخ</div>
        </div>
      </div>
    </v-card>
    <!-- /info-call -->

    <!-- rate-call -->
    <div
      class="rate-call d-flex justify-space-between align-center flex-column flex-sm-row px-4 py-6"
    >
      <div class="desc font-weight-bold mb-5 mb-sm-0">نظر خود را در ارتباط با این تماس ثبت کنید.</div>
      <div class="button">
        <v-btn min-width="180" large @click="rate">ثبت نظر</v-btn>
      </div>
    </div>
    <!-- /rate-call -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DialogRate from '../CallHistory/DialogRate.vue'
@Component
export default class HistoryTestItem extends Vue {
  async rate() {
    let rate = await this.$dialog.show({
      component: DialogRate,
    })
    // console.log(rate)
  }
}
</script>
