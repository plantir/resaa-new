<style lang="scss" scoped></style>
<template>
  <section>
    <doctorProfileMobile />
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import doctorProfileMobile from '@/components/Pages/doctor/profile/doctorProfile.mobile.vue'
@Component({
  components: {
    doctorProfileMobile,
  },
})
export default class YourComponent extends Vue {}
</script>
