<style lang="scss" scoped></style>

<template>
  <div class="call-wrapper">
    <RequestCallMobile v-if="$device.isMobile" />
    <RequestCallDesktop v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component.registerHooks(['fetch', 'head'])

@Component({
  components: {
    RequestCallMobile: () =>
      import('@/components/Pages/Call/Mobile/RequestCallMobile.vue'),
    RequestCallDesktop: () =>
      import('@/components/Pages/Call/Desktop/RequestCallDesktop.vue'),
  },
})
export default class CallPage extends Vue {
  public head() {
    return {
      title: 'سامانه رسا',
      bodyAttrs: {
        class: 'page-call',
      },
    }
  }
}
</script>
