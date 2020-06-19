<style lang="scss" scoped>
.doctors-list {
}
</style>

<template>
  <div class="doctors-list">
    <div v-for="doctor in doctors" :key="doctor.id" class="mt-6">
      <Doctor :doctor="doctor" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Doctor from '@/components/Common/Doctor/Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class DoctorsList extends Vue {
  @Prop({
    default: [],
  })
  doctors!: any[]
}
</script>
