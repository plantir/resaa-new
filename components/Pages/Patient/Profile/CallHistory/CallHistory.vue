<style lang="scss" scoped></style>

<template>
  <v-card class="calls" outlined :loading="loading">
    <v-card-title primary-title>
      <div class="full-width d-flex justify-space-between">
        <div class="title">تاریخچه تماس تلفنی</div>
      </div>
    </v-card-title>

    <div class="card-contetn mt-5">
      <div class="list" v-if="calls.length > 0">
        <CallHistoryItem v-for="call in calls" :key="call.id" :call="call" class="mb-5" />
      </div>
      <div v-else class="empty d-flex flex-column align-center">
        <p class="font-weight-medium my-12">شما تا کنون تماسی با متخصصین رسا نداشته‌اید.</p>
      </div>
    </div>

    <!-- <DialogRate v-model="dialogRateCall" /> -->
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CallHistoryItem from './CallHistoryItem.vue'

import { Call } from '@/models/Call'

@Component({
  components: {
    CallHistoryItem,
  },
})
export default class CallHistory extends Vue {
  dialogRateCall = false
  loading = false
  calls: Call[] = []

  async getCalls() {
    try {
      const userId = this.$auth.user?.userId
      console.log('CallHistory -> getCalls -> userId', userId)
      if (userId) {
        this.loading = true
        const { result } = await this.$service.profile.getCalls(userId)
        this.calls = result.calls
        this.loading = false
      }
    } catch (error) {
      this.loading = false
    }
  }

  mounted() {
    this.getCalls()
  }
}
</script>
