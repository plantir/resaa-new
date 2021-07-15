<style lang="scss" scoped></style>

<template>
  <div class="call-wrapper">
    <ExperiementMobile v-if="$device.isMobile" />
    <ExperiementDesktop :doctorInfo="doctor" v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

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
  doctor = {}
  public head() {
    return {
      title: 'سامانه رسا',
      bodyAttrs: {
        class: 'page-call',
      },
    }
  }
  async fetch() {
    let { result } = await this.$service.doctors.get(this.$route.params.id)
    this.doctor = result.doctor
  }
}
</script>
