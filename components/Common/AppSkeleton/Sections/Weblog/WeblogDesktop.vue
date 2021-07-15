<style lang="scss" scoped>
.post {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
  background: #fff;
  border-right: 8px;
  content: '';
  width: 100%;
  height: 220px;
  &.big {
    height: 470px;
    .image {
      height: 300px;
    }
  }
  .image {
    background: rgba(0, 0, 0, 0.12);
    content: '';
    width: 100%;
    height: 140px;
  }
  .v-skeleton-loader__paragraph {
    padding: 16px;
  }
}
</style>

<template>
  <v-skeleton-loader class="mx-auto full-width">
    <v-row>
      <v-col cols="6" class="right">
        <div class="wrapper py-3">
          <div class="post big v-skeleton-loader__bone">
            <div class="image v-skeleton-loader__bone"></div>
            <div
              class="v-skeleton-loader__card-heading v-skeleton-loader__bone"
            >
              <div
                class="v-skeleton-loader__heading v-skeleton-loader__bone"
              ></div>
            </div>
            <div class="v-skeleton-loader__paragraph v-skeleton-loader__bone">
              <div
                class="v-skeleton-loader__text v-skeleton-loader__bone"
              ></div>
              <div
                class="v-skeleton-loader__text v-skeleton-loader__bone"
              ></div>
              <div
                class="v-skeleton-loader__text v-skeleton-loader__bone"
              ></div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col cols="6">
            <div class="post v-skeleton-loader__bone">
              <div class="image v-skeleton-loader__bone"></div>
              <div
                class="v-skeleton-loader__card-heading v-skeleton-loader__bone"
              >
                <div
                  class="v-skeleton-loader__heading v-skeleton-loader__bone"
                ></div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="post v-skeleton-loader__bone">
              <div class="image v-skeleton-loader__bone"></div>
              <div
                class="v-skeleton-loader__card-heading v-skeleton-loader__bone"
              >
                <div
                  class="v-skeleton-loader__heading v-skeleton-loader__bone"
                ></div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="post v-skeleton-loader__bone">
              <div class="image v-skeleton-loader__bone"></div>
              <div
                class="v-skeleton-loader__card-heading v-skeleton-loader__bone"
              >
                <div
                  class="v-skeleton-loader__heading v-skeleton-loader__bone"
                ></div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="post v-skeleton-loader__bone">
              <div class="image v-skeleton-loader__bone"></div>
              <div
                class="v-skeleton-loader__card-heading v-skeleton-loader__bone"
              >
                <div
                  class="v-skeleton-loader__heading v-skeleton-loader__bone"
                ></div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-skeleton-loader>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class WeblogDesktop extends Vue {}
</script>
