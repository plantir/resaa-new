<style lang="scss" scoped>
.empty {
  p {
    color: #707070;
  }
}
</style>

<template>
  <div class="empty d-flex flex-column align-center">
    <p class="font-weight-medium mt-12">
      شما متخصصی را به لیست علاقه‌مندی‌تان اضافه نکرده‌اید
    </p>

    <nuxt-link class="mt-12" to="/">مشاهده لیست متخصصان</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class EmptyFavoriteSpecialists extends Vue {}
</script>
