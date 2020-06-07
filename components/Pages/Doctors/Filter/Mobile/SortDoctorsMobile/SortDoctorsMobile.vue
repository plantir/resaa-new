<style lang="scss" scoped>
.sort {
  border: 1px solid #6c6c6c;
  border-radius: 8px;
  line-height: 40px;
  padding: 0 12px;
  font-weight: bold;
  .label {
    color: #6c6c6c;
  }
}
</style>

<template>
  <div class="sort-wrapper">
    <div
      class="sort d-flex justify-space-between mt-5"
      @click="dialogVisible = !dialogVisible"
    >
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
    type: String,
    required: true,
  })
  readonly value!: String

  get orderBy() {
    return this.value
  }

  set orderBy(val) {
    this.$emit('input', val)
  }

  dialogVisible = false

  sortOptions = [
    {
      label: 'فرقی نمی‌کند',
      value: 'NONE',
    },
    {
      label: 'در دسترس',
      value: 'AVAILABLE',
    },
    {
      label: 'بیشترین تماس',
      value: 'MOST_CALLS',
    },
    {
      label: 'بیشترین سابقه',
      value: 'MOST_EXPERIENCE',
    },
  ]

  get selectedText() {
    const selected = this.sortOptions.find(item => item.value === this.orderBy)
    return selected?.label
  }

  onSort(sort: String) {
    this.orderBy = sort
  }
}
</script>
