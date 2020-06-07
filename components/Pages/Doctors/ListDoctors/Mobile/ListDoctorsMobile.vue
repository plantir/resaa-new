<style lang="scss" scoped>
.doctors-list {
  width: 100%;
  ::v-deep {
    .doctor {
      width: calc(100% - 20px);
      height: auto;
      .avatar {
        position: absolute;
        right: 15;
        top: 10px;
        width: 110px;
        height: 110px;
      }
      .left-side {
        width: 100%;
        padding: 15px 10px 15px 10px;
        .top {
          width: 100%;
          flex-direction: column;
          .main-title {
            margin-right: 100px;
            a {
              font-size: 14px;
              flex-direction: column;
              display: flex;
              .line {
                display: none;
              }
              .skill {
                margin-top: 5px;
              }
            }
          }
          .status {
            margin-right: 100px;
            margin-top: 10px;
            padding: 0 15px;
            width: max-content;
          }
        }
        .middle {
          margin-top: 30px;
          font-size: 10px;
          font-weight: 500;
          line-height: 18px;
        }
        .bottom {
          flex-direction: column;
          .meta-wrapper {
            justify-content: space-evenly !important;
            flex-wrap: wrap;
            width: 100%;
            .meta-item {
              margin-top: 30px;
            }
          }
          a {
            margin-top: 20px;
            text-align: center;
          }
        }
      }
    }
  }
  .pagination-wrapper {
    margin-top: 30px;
    width: calc(100% - 10px);
    padding-right: 15px;
    ::v-deep {
      .v-pagination__item {
        box-shadow: none;
        border: solid 0.5px #13d1f3;
        background: transparent;
        border-radius: 4px;
        color: #212121;
        &.v-pagination__item--active {
          color: #fff;
          background-image: linear-gradient(225deg, #13d1f3, #35d6c1);
        }
      }
      .v-pagination__navigation {
        background: transparent;
        box-shadow: none;
        color: #13d1f3;
        i {
          color: #13d1f3;
        }
        &.v-pagination__navigation--disabled {
          i {
            color: #b6b6b6;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="doctors-list d-flex flex-column align-end">
    <Doctor v-for="(item, index) in 10" :key="index" class="mt-6" />

    <div class="pagination-wrapper d-flex justify-center">
      <v-pagination
        v-model="page"
        :length="100"
        :circle="false"
        :total-visible="5"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Doctor from '../Desktop/DoctorsList/Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class ListDoctorsMobile extends Vue {
  page = 1
}
</script>
