<style lang="scss" scoped>
.header-charge {
  display: flex;
  flex-direction: column;
  .img {
    text-align: center;
  }
  p {
    line-height: 28px;
    font-weight: 500;
    color: #212121;
  }
}
</style>

<template>
  <div class="header-charge">
    <div class="img">
      <Icon class="my-8" fileName="ic_clock_shape.png" />
    </div>
    <slot />
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
export default class HeaderCharge extends Vue {}
</script>
