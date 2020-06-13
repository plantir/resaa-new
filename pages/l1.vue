<style lang="scss" scoped></style>
<template>
  <section>
    <doctorProfileDesktop v-if="$device.isDesktop" />
    <doctorProfileMobile v-if="$device.isMobileOrTablet" />
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import doctorProfileDesktop from '@/components/Pages/doctor/profile/doctorProfile.desktop.vue'
import doctorProfileMobile from '@/components/Pages/doctor/profile/doctorProfile.mobile.vue'
@Component({
  components: {
    doctorProfileDesktop,
    doctorProfileMobile,
  },
})
export default class YourComponent extends Vue {}
</script>
