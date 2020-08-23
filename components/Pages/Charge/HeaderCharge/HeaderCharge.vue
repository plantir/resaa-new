<style lang="scss" scoped>
.header-charge {
  p {
    line-height: 24px;
  }
}
</style>

<template>
  <div class="header-charge d-flex flex-column px-6">
    <Icon class="my-8" fileName="ic_mobile_number.svg" />
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
