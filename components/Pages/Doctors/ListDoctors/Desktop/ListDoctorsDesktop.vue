<style lang="scss" scoped>
.list-doctors-wrapper {
  width: calc(100% - 310px);
}
</style>

<template>
  <div class="list-doctors-wrapper">
    <SortDoctors @click="onSort" />

    <DoctorsList :doctors="doctors" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SortDoctors from './SortDoctors/SortDoctors.vue'
import DoctorsList from './DoctorsList/DoctorsList.vue'

@Component({
  components: {
    SortDoctors,
    DoctorsList,
  },
})
export default class ListDoctorsDesktop extends Vue {
  onSort(sort: String) {
    alert(sort)
  }

  doctors = []
}
</script>
