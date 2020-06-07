<style lang="scss">
#overlay-sort {
  background-color: rgba($color: #000000, $alpha: 0.3);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
<style lang="scss" scoped>
.sort-dialog {
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 250px;
  z-index: 999;
  padding: 24px 15px;
  .main-title {
    color: #6c6c6c;
    font-weight: bold;
  }
  .items {
    padding-top: 10px;
  }
}
</style>

<template>
  <div class="sort-dialog" v-if="dialogVisible">
    <div class="main-title">مرتب‌ شده بر اساس:</div>
    <div class="items">
      <SortItem
        v-for="(item, index) in sortOptions"
        :key="index"
        :sort="item"
        :active="sort === item.value"
        @click="onSort(item.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SortItem from './SortItem.vue'

@Component({
  components: {
    SortItem,
  },
})
export default class SortDialogMobile extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly value!: Boolean

  @Prop({
    type: String,
    required: true,
  })
  readonly sort!: String

  get dialogVisible() {
    if (process.client) {
      if (this.value) {
        const elm = document.createElement('div')
        elm.id = 'overlay-sort'
        document.body.append(elm)
      } else {
        const elm = document.getElementById('overlay-sort')
        if (elm) {
          elm.remove()
        }
      }
    }

    return this.value
  }

  set dialogVisible(val) {
    this.$emit('input', val)
  }

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

  onSort(sort: String) {
    this.$emit('sort', sort)
    this.dialogVisible = false
  }
}
</script>
