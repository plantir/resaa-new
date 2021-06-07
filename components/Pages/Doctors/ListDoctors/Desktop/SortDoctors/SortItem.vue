<style lang="scss" scoped>
.sort-item {
  position: relative;
  font-size: 14px;
  font-weight: 300;
  margin: 0 15px;
  cursor: pointer;
  &.active {
    font-weight: bold;
    color: #212121;
    &::before {
      background-color: #13d1f3;
      border-radius: 10px;
      position: absolute;
      width: 100%;
      height: 5px;
      content: '';
      bottom: 0;
      right: 0;
    }
  }
  &:last-child {
    margin-left: 0;
  }
}
</style>

<template>
  <div class="sort-item" :class="{ active: active === true }" @click="onClick">
    {{ sort.label }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

interface SortItemInterface {
  label: String
  value: String
}

@Component
export default class SortItem extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly sort!: SortItemInterface

  @Prop({
    type: Boolean,
    required: true,
  })
  readonly active!: Boolean

  onClick() {
    this.$emit('click', this.sort.value)
  }
}
</script>
