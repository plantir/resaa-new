<style lang="scss" scoped></style>

<template>
  <button type="button" @click="hasDoctorName = !hasDoctorName">
    <span class="main-color font-weight-medium">{{ textBtn }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ToggleDoctor extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly value!: Boolean

  get hasDoctorName() {
    return this.value
  }
  set hasDoctorName(val) {
    this.$emit('input', val)
  }

  get textBtn() {
    let text = 'تغییر بسته‌های شارژ بر اساس نام متخصص'
    if (this.hasDoctorName) {
      text = 'حذف نام متخصص'
    }

    return text
  }
}
</script>
