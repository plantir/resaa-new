<style lang="scss" scoped>
main.doctors-main {
  margin-top: 30px;
}
</style>

<template>
  <main class="doctors-main">
    <v-container class="d-flex flex-wrap">
      <FilterMobile v-model="filter" v-if="$device.isMobile" />
      <FilterDesktop v-model="filter" v-else />

      <ListDoctorsMobile v-if="$device.isMobile" />
      <ListDoctorsDesktop @sort="onSort" v-else />
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
    orderBy: 'NONE',
  }

  public head() {
    return {
      title: 'پزشکان و متخصصان',
      bodyAttrs: {
        class: 'page-doctors',
      },
    }
  }

  onSort(sort: any) {
    this.filter.orderBy = sort
    console.log('sort', sort)
  }
}
</script>
