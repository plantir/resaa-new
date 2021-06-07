<style lang="scss" scoped>
.sort-doctors-wrapper {
  border-bottom: solid 1px #e6e6e6;
  line-height: 50px;
  width: 100%;
  .main-title {
    font-size: 17px;
    font-weight: bold;
  }
  .sort-items-wrapper {
    user-select: none;
    .label {
      font-size: 14px;
      font-weight: bold;
      color: #6c6c6c;
    }
  }
}
</style>

<template>
  <div class="sort-doctors-wrapper d-flex justify-space-between">
    <h1 class="main-title">لیست پزشکان</h1>
    <div class="sort-items-wrapper d-flex">
      <span class="label ml-5">مرتب شده بر اساس:</span>
      <div class="sort-items d-flex">
        <SortItem
          v-for="(item, index) in sortOptions"
          :key="index"
          :sort="item"
          :active="sort === item.value"
          @click="onSort"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SortItem from './SortItem.vue'

@Component({
  components: {
    SortItem,
  },
})
export default class SortDoctors extends Vue {
  sort: Number = 0
  sortOptions = [
    {
      label: 'فرقی نمی‌کند',
      value: 0,
    },
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

  onSort(sort: Number) {
    this.sort = sort
    this.$emit('sort', sort)
  }
}
</script>
