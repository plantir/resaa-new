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
    <h1 class="main-title">لیست پزشکان</h1>
    <FilterByName v-model="filter.query" class="mt-4" />
    <FilterBased
      :categories="categories"
      :specialities="specialities"
      v-model="filter"
      class="mt-4"
      @submit="onSubmit"
    />
    <SortDoctorsMobile v-model="filter.orderBy" @sort="onSubmit" />
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

  @Prop()
  categories!: any[]

  @Prop()
  specialities!: any[]

  get filter() {
    return this.value
  }

  set filter(val) {
    // this.$emit('input', val)
  }

  // onChange() {
  //   this.$emit('input', this.filter)
  // }

  onSubmit() {
    this.$emit('input', this.filter)
  }
}
</script>
