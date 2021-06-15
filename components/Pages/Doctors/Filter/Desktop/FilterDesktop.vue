<style lang="scss" scoped>
.filter-wrapper {
  width: 25%;
  margin-left: 40px;
}
</style>

<template>
  <aside class="filter-wrapper">
    <form @submit.prevent="onSubmit">
      <FilterByName @input="onChange" v-model="filter.query" />
      <FilterBySpecialty
        v-model="filter.specialty"
        @input="onChange"
        :specialities="specialities"
        class="mt-7"
      />
      <FilterBySickness
        v-model="filter.sickness"
        @input="onChange"
        :categories="categories"
        class="mt-7"
      />
    </form>
  </aside>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FilterByName from './FilterByName/FilterByName.vue'
import FilterBySpecialty from './FilterBySpecialty/FilterBySpecialty.vue'
import FilterBySickness from './FilterBySickness/FilterBySickness.vue'

@Component({
  components: {
    FilterByName,
    FilterBySpecialty,
    FilterBySickness,
  },
})
export default class FilterDesktop extends Vue {
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
  @Prop()
  categories!: any[]

  @Prop()
  specialities!: any[]

  onChange() {
    this.$emit('input', this.filter)
  }
  onSubmit() {
    this.$emit('filter', this.filter)
  }
}
</script>
