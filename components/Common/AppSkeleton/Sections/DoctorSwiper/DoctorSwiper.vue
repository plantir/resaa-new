<style lang="scss" scoped>
.doctor {
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  width: 148px;
  margin: 0 10px;
  direction: rtl;
  padding: 0 8px 5px 8px;
  @include media(sm) {
    min-width: 190px;
  }
  .image {
    padding-top: 8px;
    .v-skeleton-loader__avatar {
      width: 148px;
      height: 190px;
      @include media(sm) {
        min-width: 188px;
      }
      border-radius: 6px;
    }
  }
  .bottom {
    font-size: 12px;
    .full-name {
      border-bottom: 2px solid #e6e6e6;
      font-weight: bold;
      position: relative;
      line-height: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &::before {
        background-color: #f9a429;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 40px;
        height: 2px;
      }
    }
  }
}
</style>

<template>
  <v-skeleton-loader class="v-skeleton-loader--tile">
    <div class="doctor">
      <div class="image">
        <div class="v-skeleton-loader__avatar v-skeleton-loader__bone"></div>
      </div>

      <div class="bottom mt-4">
        <div class="full-name">
          <div class="v-skeleton-loader__text v-skeleton-loader__bone"></div>
        </div>
        <div class="skill">
          <div
            class="v-skeleton-loader__text v-skeleton-loader__bone mt-2"
          ></div>
        </div>
      </div>
    </div>
  </v-skeleton-loader>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DoctorSwiper extends Vue {}
</script>
