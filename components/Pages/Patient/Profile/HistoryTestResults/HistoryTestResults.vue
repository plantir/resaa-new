<style lang="scss" scoped></style>

<template>
  <v-card class outlined>
    <v-card-title primary-title>
      <div class="full-width d-flex justify-space-between">
        <div class="title">تاریخچه جواب آزمایش‌ها</div>
      </div>
    </v-card-title>

    <div class="card-contetn mt-5">
      <div class="list" v-if="history.length > 0">
        <HistoryTestItem v-for="(item, index) in history" :key="index" @rate="onRate" class="mb-5" />
      </div>
      <div v-else class="empty d-flex flex-column align-center">
        <p class="font-weight-medium my-12">شما تاکنون آزمایشی را برای متخصصی ارسال نکرده‌اید.</p>
      </div>
    </div>

    <!-- <DialogRate v-model="dialogRateTest" /> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HistoryTestItem from './HistoryTestItem.vue'
// import DialogRate from '../CallHistory/DialogRate.vue'

@Component({
  components: {
    HistoryTestItem,
    // DialogRate,
  },
})
export default class HistoryTestResults extends Vue {
  dialogRateTest = false
  history = [
    {
      name: 'test',
    },
    {
      name: 'test',
    },
  ]

  onRate() {
    this.dialogRateTest = true
  }
}
</script>
