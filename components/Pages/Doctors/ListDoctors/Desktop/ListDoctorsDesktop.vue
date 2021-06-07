<style lang="scss" scoped>
.list-doctors-wrapper {
  width: calc(75% - 40px);
  padding-bottom: 40px;
}
</style>

<template>
  <div class="list-doctors-wrapper">
    <SortDoctors @sort="onSort" />
    <DoctorsList
      :doctors="doctors"
      :loading="loading"
      :pageCurrent="pageCurrent"
      :total="total"
      :pageChange="pageChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SortDoctors from './SortDoctors/SortDoctors.vue'
import DoctorsList from './DoctorsList/DoctorsList.vue'

@Component({
  components: {
    SortDoctors,
    DoctorsList,
  },
})
export default class ListDoctorsDesktop extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly loading!: Boolean

  @Prop({
    type: Number,
    required: true,
  })
  readonly pageCurrent!: Number

  @Prop({
    type: Number,
    required: true,
  })
  readonly total!: Number

  @Prop({
    type: Function,
    required: true,
  })
  readonly pageChange!: Function

  @Prop({
    required: true,
  })
  readonly doctors!: any[]

  onSort(sort: String) {
    this.$emit('sort', sort)
  }
}
</script>
