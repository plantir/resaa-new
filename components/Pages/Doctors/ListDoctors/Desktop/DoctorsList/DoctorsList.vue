<style lang="scss" scoped>
.doctors-list {
}
</style>

<template>
  <div class="doctors-list">
    <div class="doctors" v-if="loading">
      <AppSkeleton section="Doctor" v-for="(item, index) in 10" :key="index" class="mt-6" />
    </div>

    <div class="doctors" v-if="!loading">
      <Doctor v-for="(item, index) in 10" :key="index" class="mt-6" />
    </div>

    <div class="pagination-wrapper" v-if="!loading">
      <v-pagination v-model="page" :length="100" :circle="false" :total-visible="10" />
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
  loading = true
  page = 1
}
</script>
