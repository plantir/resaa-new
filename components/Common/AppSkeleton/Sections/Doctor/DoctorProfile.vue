<style lang="scss" scoped>
.box {
  position: relative;
  min-width: 310px;
  padding-bottom: 30px;
  .img {
    position: absolute;
    top: -16px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    width: 192px;
    height: 192px;
    .v-skeleton-loader__avatar {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .list-wrapper {
    padding: 200px 20px 0;
    .list-item {
      .v-skeleton-loader__text {
        margin: 30px 0;
      }
    }
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    .v-skeleton-loader__button {
      flex: 0 0 40%;
    }
  }
}
.medical {
  padding: 30px;
  height: 320px;
  .medical-header {
    padding: 20px 0;
  }
  .medical-body {
    > div {
      padding: 10px 0;
      margin: 20px 0;
    }
  }
}
.description {
  margin-bottom: 20px;
}
.description-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .text {
    width: 90%;
  }
}
</style>

<template>
  <v-skeleton-loader>
    <v-container>
      <v-row>
        <v-col md="4" xl="3">
          <v-card class="box">
            <div class="img">
              <div
                class="v-skeleton-loader__avatar v-skeleton-loader__bone"
              ></div>
            </div>
            <div class="list-wrapper">
              <div v-for="(item, index) in 5" :key="index">
                <div class="list-item">
                  <div
                    class="v-skeleton-loader__text v-skeleton-loader__bone"
                  ></div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div
                class="v-skeleton-loader__button v-skeleton-loader__bone"
              ></div>
              <div
                class="v-skeleton-loader__button v-skeleton-loader__bone"
              ></div>
            </div>
          </v-card>
        </v-col>
        <v-col md="8" xl="9">
          <v-row>
            <v-col md="6">
              <v-card class="medical">
                <div class="medical-header">
                  <div
                    class="v-skeleton-loader__text v-skeleton-loader__bone"
                  ></div>
                </div>
                <div class="medical-body">
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
              </v-card>
            </v-col>
            <v-col md="6">
              <v-card
                class="description"
                v-for="(item, index) in 4"
                :key="index"
              >
                <div class="description-wrapper">
                  <div class="avatar">
                    <div
                      class="v-skeleton-loader__avatar v-skeleton-loader__bone"
                    ></div>
                  </div>
                  <div class="text">
                    <div
                      class="v-skeleton-loader__list-item-two-line v-skeleton-loader__bone"
                    >
                      <div
                        class="v-skeleton-loader__sentences v-skeleton-loader__bone"
                      >
                        <div
                          class="v-skeleton-loader__text v-skeleton-loader__bone"
                        ></div>
                        <div
                          class="v-skeleton-loader__text v-skeleton-loader__bone"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-skeleton-loader>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Doctor extends Vue {}
</script>
