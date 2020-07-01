<style lang="scss" scoped>
.post {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
  background: #fff;
  border-right: 8px;
  content: '';
  width: 100%;
  height: 470px;
  .image {
    background: rgba(0, 0, 0, 0.12);
    content: '';
    width: 100%;
    height: 300px;
  }
  .v-skeleton-loader__paragraph {
    padding: 16px;
  }
}
</style>

<template>
  <v-skeleton-loader class="mx-auto full-width">
    <div class="post v-skeleton-loader__bone">
      <div class="image v-skeleton-loader__bone"></div>
      <div class="v-skeleton-loader__card-heading v-skeleton-loader__bone">
        <div class="v-skeleton-loader__heading v-skeleton-loader__bone"></div>
      </div>
      <div class="v-skeleton-loader__paragraph v-skeleton-loader__bone">
        <div class="v-skeleton-loader__text v-skeleton-loader__bone"></div>
        <div class="v-skeleton-loader__text v-skeleton-loader__bone"></div>
        <div class="v-skeleton-loader__text v-skeleton-loader__bone"></div>
      </div>
    </div>
  </v-skeleton-loader>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WeblogDesktop extends Vue {}
</script>
