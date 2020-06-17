<style lang="scss" scoped>
.card-timer {
  position: relative;
  z-index: 1;
  .main-title {
    font-weight: bold;
  }
  .desc {
    color: #6c6c6c;
  }
}
</style>

<template>
  <v-card
    class="card-timer d-flex flex-column align-center justify-center pa-4"
  >
    <div class="image">
      <Icon fileName="ic_success_large.png" />
    </div>
    <div class="main-title mt-2">{{ title }}</div>
    <div class="desc mt-3">
      {{ desc }}
    </div>

    <Countdown class="mt-9" />

    <slot />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'
import Countdown from './Countdown.vue'

@Component({
  components: {
    Icon,
    Countdown,
  },
})
export default class CardTimer extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly title!: String

  @Prop({
    type: String,
    required: true,
  })
  readonly desc!: String
}
</script>
