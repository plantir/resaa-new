<style lang="scss" scoped>
.filter-wrapper {
  width: 100%;
  .main-title {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>

<template>
  <aside class="filter-wrapper">
    <div class="main-title">لیست پزشکان</div>
    <FilterByName v-model="filter.query" class="mt-4" />
    <FilterBased v-model="filter" class="mt-4" />
    <SortDoctorsMobile v-model="filter.orderBy" />
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FilterByName from './FilterByName/FilterByName.vue'
import FilterBased from './FilterBased/FilterBased.vue'
import SortDoctorsMobile from './SortDoctorsMobile/SortDoctorsMobile.vue'

@Component({
  components: {
    FilterByName,
    FilterBased,
    SortDoctorsMobile,
  },
})
export default class FilterMobile extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly value!: Object

  get filter() {
    return this.value
  }

  set filter(val) {
    this.$emit('input', val)
  }

  onSubmit() {
    this.$emit('filter', this.filter)
  }
}
</script>
