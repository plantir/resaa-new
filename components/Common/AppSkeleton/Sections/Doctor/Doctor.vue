<style lang="scss" scoped>
.doctor {
  position: relative;
  width: calc(100% - 20px);
  height: auto;
  @include media(sm) {
    width: 100%;
    height: 192px;
  }
  .avatar {
    position: absolute;
    right: -10px;
    top: 0px;
    width: 110px;
    height: 110px;
    .v-skeleton-loader__avatar {
      border-radius: 8px;
      width: 110px;
      height: 110px;
    }
    @include media(sm) {
      position: relative;
      top: auto;
      margin-right: -15px;
      width: 160px;
      height: 160px;
      .v-skeleton-loader__avatar {
        width: 160px;
        height: 160px;
      }
    }
  }
  .left-side {
    width: 100%;
    padding: 15px 10px 15px 10px;
    height: 100%;
    @include media(sm) {
      width: calc(100% - 160px);
      height: 100%;
      padding: 35px 25px 25px 5px;
    }

    .top {
      width: 100%;
      flex-direction: column;

      @include media(sm) {
        flex-direction: row;
      }
      .main-title {
        display: block;
        width: 30%;
        margin-right: 100px;
        .v-skeleton-loader__text {
          height: 22px;
        }
        @include media(sm) {
          margin-right: 0;
          font-size: 18px;
        }
      }
      .status {
        margin-right: 100px;
        margin-top: 10px;
        padding: 0 15px;
        width: max-content;
        min-width: 120px;
        height: 20px;
        @include media(sm) {
          margin-right: 0;
        }
      }
    }

    .middle {
      margin-top: 50px;
      font-size: 10px;
      font-weight: 500;
      line-height: 18px;
      @include media(sm) {
        margin-top: 0;
        font-size: 12px;
      }
    }

    .bottom {
      flex-direction: column;
      font-size: 12px;
      font-weight: bold;
      color: #212121;
      @include media(sm) {
        flex-direction: row;
      }
      .meta-wrapper {
        justify-content: space-evenly !important;
        flex-wrap: wrap;
        width: 100%;
        @include media(sm) {
          width: calc(100% - 160px);
        }
        .meta-item {
          margin-top: 30px;
          .value {
            margin-right: 5px;
            .v-skeleton-loader__chip {
              height: 20px;
            }
          }
        }
      }

      .view-profile {
        text-align: center;
        margin-top: 20px;
        border-radius: 8px;
        line-height: 36px;
        height: 36px;
        color: #35d6c1;
        padding: 0 25px;
        width: 100%;
        @include media(sm) {
          max-width: 120px;
        }
      }
    }
  }
}
</style>

<template>
  <v-skeleton-loader>
    <v-card class="doctor d-flex align-center">
      <div class="avatar">
        <div class="v-skeleton-loader__avatar v-skeleton-loader__bone"></div>
      </div>

      <div class="left-side d-flex flex-column justify-space-between">
        <div class="top d-flex justify-space-between">
          <h3 class="main-title">
            <div class="v-skeleton-loader__text v-skeleton-loader__bone"></div>
          </h3>

          <div
            class="status v-skeleton-loader__chip v-skeleton-loader__bone"
          ></div>
        </div>

        <div class="middle">
          <div
            class="v-skeleton-loader__paragraph v-skeleton-loader__bone mt-2"
          >
            <div class="v-skeleton-loader__text v-skeleton-loader__bone"></div>
            <div class="v-skeleton-loader__text v-skeleton-loader__bone"></div>
            <div class="v-skeleton-loader__text v-skeleton-loader__bone"></div>
          </div>
        </div>

        <div class="bottom d-flex justify-space-between">
          <div class="meta-wrapper d-flex justify-space-between">
            <div class="meta-item d-flex align-center">
              <span class="value">
                <div
                  class="v-skeleton-loader__chip v-skeleton-loader__bone"
                ></div>
              </span>
            </div>
            <div class="meta-item d-flex align-center">
              <span class="value">
                <div
                  class="v-skeleton-loader__chip v-skeleton-loader__bone"
                ></div>
              </span>
            </div>
            <div class="meta-item d-flex align-center">
              <span class="value">
                <div
                  class="v-skeleton-loader__chip v-skeleton-loader__bone"
                ></div>
              </span>
            </div>
          </div>

          <div
            class="
              view-profile
              v-skeleton-loader__button v-skeleton-loader__bone
            "
          ></div>
        </div>
      </div>
    </v-card>
  </v-skeleton-loader>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Doctor extends Vue {}
</script>
