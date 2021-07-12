<style lang="scss" scoped>
.sort {
  display: flex;
  justify-content: space-between;
  border: solid 1px #35d6c1;
  border-radius: 8px;
  line-height: 40px;
  padding: 0 12px;
  font-weight: bold;
  .label {
    color: #000000;
  }
  .value {
    color: #35d6c1;
  }
}
</style>

<template>
  <div class="sort-wrapper">
    <div class="sort mt-5" @click="dialogVisible = !dialogVisible">
      <div class="label">مرتب شده بر اساس:</div>
      <div class="value">{{ selectedText }}</div>
    </div>

    <SortDialogMobile v-model="dialogVisible" :sort="orderBy" @sort="onSort" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SortDialogMobile from './SortDialogMobile.vue'

@Component({
  components: {
    SortDialogMobile,
  },
})
export default class SortDoctorsMobile extends Vue {
  @Prop({
    type: [String, Number],
    required: true,
  })
  readonly value!: any

  get orderBy() {
    return this.value
  }

  set orderBy(val) {
    this.$emit('input', val)
  }

  dialogVisible = false

  sortOptions = [
    {
      label: 'در دسترس',
      value: 1,
    },
    {
      label: 'بیشترین تماس',
      value: 2,
    },
    {
      label: 'بیشترین سابقه',
      value: 3,
    },
  ]

  get selectedText() {
    const selected = this.sortOptions.find(
      (item) => item.value === this.orderBy
    )
    return selected?.label
  }

  onSort(sort: String) {
    this.orderBy = sort
    this.$emit('sort')
  }
}
</script>
