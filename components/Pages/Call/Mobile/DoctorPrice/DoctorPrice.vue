<style lang="scss" scoped>
.doctor-price {
  .price {
    color: #f9a429;
  }
}
</style>

<template>
  <v-card class="doctor-price pa-3">
    <div class="d-flex justify-space-between align-center">
      <div class="right">
        <span class="full-name font-weight-bold">دکتر مهیا ملکی</span>
      </div>
      <div class="left">
        <OnlineStatus :status="false" />
      </div>
    </div>
    <div class="d-flex justify-space-between align-center mt-6">
      <div class="right">
        <span class="full-name font-weight-bold">تعرفه تماس:</span>
      </div>
      <div class="left">
        <div class="price">
          ‏ <span>{{ 3000 | currency | persianDigit }}</span> تومان در دقیقه
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OnlineStatus from '@/components/Common/OnlineStatus/OnlineStatus.vue'

@Component({
  components: {
    OnlineStatus,
  },
})
export default class DoctorPrice extends Vue {}
</script>
