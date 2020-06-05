<style lang="scss" scoped></style>

<template>
  <FilterCard title="جستجو" :hasCollapse="false">
    <div class="px-4">
      <v-text-field
        v-model="query"
        placeholder="نام و نام خانوادگی پزشک"
        name="query"
        clearable
        outlined
        dense
      />
    </div>
  </FilterCard>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FilterCard from '../FilterCard/FilterCard.vue'

@Component({
  components: {
    FilterCard,
  },
})
export default class FilterByName extends Vue {
  @Prop({
    required: true,
  })
  readonly value!: any

  get query() {
    return this.value
  }

  set query(val) {
    this.$emit('input', val)
  }
}
</script>
