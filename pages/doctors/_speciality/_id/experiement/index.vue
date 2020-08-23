<style lang="scss" scoped></style>

<template>
  <div class="call-wrapper">
    <ExperiementMobile v-if="$device.isMobile" />
    <ExperiementDesktop v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component.registerHooks(['fetch', 'head'])

@Component({
  components: {
    ExperiementMobile: () =>
      import('@/components/Pages/Experiement/Experiement.mobile.vue'),
    ExperiementDesktop: () =>
      import('@/components/Pages/Experiement/Experiement.desktop.vue'),
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
