<style lang="scss" scoped>
main.doctors-main {
  margin-top: 30px;
}
</style>

<template>
  <main class="doctors-main">
    <v-container class="d-flex">
      <FilterMobile v-if="$device.isMobile" />
      <FilterDesktop v-model="filter" v-else />

      <ListDoctorsMobile v-if="$device.isMobile" />
      <ListDoctorsDesktop v-else />
    </v-container>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    FilterMobile: () =>
      import('@/components/Pages/Doctors/Filter/Mobile/FilterMobile.vue'),
    FilterDesktop: () =>
      import('@/components/Pages/Doctors/Filter/Desktop/FilterDesktop.vue'),
    ListDoctorsMobile: () =>
      import(
        '@/components/Pages/Doctors/ListDoctors/Mobile/ListDoctorsMobile.vue'
      ),
    ListDoctorsDesktop: () =>
      import(
        '@/components/Pages/Doctors/ListDoctors/Desktop/ListDoctorsDesktop.vue'
      ),
  },
})
export default class DoctorsPage extends Vue {
  filter = {
    query: null,
    specialty: [],
    sickness: [],
  }

  public head() {
    return {
      title: 'پزشکان و متخصصان',
      bodyAttrs: {
        class: 'page-doctors',
      },
    }
  }
}
</script>
