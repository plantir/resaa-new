<style lang="scss" scoped>
.countdown {
  > div {
    position: relative;
    padding: 0 15px;
    text-align: center;
    line-height: 20px;
    &::before {
      background-color: #e6e6e6;
      width: 1px;
      height: 20px;
      content: '';
      position: absolute;
      right: 0;
      top: 1px;
    }
    &:last-child::before {
      display: none;
    }
    .value {
      color: #f9a429;
    }
    .label {
      font-weight: bold;
      font-size: 10px;
    }
  }
}
</style>

<template>
  <client-only>
    <VueCountdown :time="2 * 24 * 60 * 60 * 1000">
      <template slot-scope="props">
        <div class="countdown d-flex ltr">
          <div class="days d-flex flex-column">
            <span class="value">{{ props.days | persianDigit }}</span>
            <span class="label">روز</span>
          </div>
          <div class="hours d-flex flex-column">
            <span class="value">{{ props.hours | persianDigit }}</span>
            <span class="label">ساعت</span>
          </div>
          <div class="minutes d-flex flex-column">
            <span class="value">{{ props.minutes | persianDigit }}</span>
            <span class="label">دقیقه</span>
          </div>
          <div class="seconds d-flex flex-column">
            <span class="value">{{ props.seconds | persianDigit }}</span>
            <span class="label">ثانیه</span>
          </div>
        </div>
      </template>
    </VueCountdown>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const VueCountdown = require('@chenfengyuan/vue-countdown')

@Component({
  components: {
    VueCountdown,
  },
})
export default class Countdown extends Vue {}
</script>
