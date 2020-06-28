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
    @include media(sm) {
      position: relative;
      top: auto;
      margin-right: -15px;
      width: 160px;
      height: 160px;
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
        margin-right: 100px;
        font-size: 14px;
        @include media(sm) {
          margin-right: 0;
          font-size: 18px;
        }

        .full-name {
          color: #212121;
        }
        .line,
        .skill {
          color: #5e696e;
        }
        a {
          display: flex;
          flex-direction: column;
          @include media(sm) {
            flex-direction: row;
          }
          .main-title {
            font-size: 18px;
          }
          .line {
            display: none;
            @include media(sm) {
              display: block;
            }
          }
          .skill {
            margin-top: 5px;
          }
        }
      }
      ::v-deep {
        .status {
          margin-right: 100px;
          margin-top: 10px;
          padding: 0 15px;
          width: max-content;
          @include media(sm) {
            margin-right: 0;
          }
        }
      }
    }

    .middle {
      margin-top: 30px;
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
          ::v-deep {
            img {
              width: 20px;
              height: 20px;
            }
          }
          i {
            font-size: 20px;
          }
          .value {
            margin-right: 5px;
          }
        }
      }

      .view-profile {
        text-align: center;
        margin-top: 20px;
        border: 1px solid #35d6c1;
        border-radius: 8px;
        line-height: 36px;
        color: #35d6c1;
        padding: 0 25px;
        font-weight: bold;
      }
    }
  }
}
</style>

<template>
  <v-card class="doctor d-flex align-center">
    <div class="avatar">
      <v-img src="/images/avatar/1.png" alt="test" />
    </div>

    <div class="left-side d-flex flex-column justify-space-between">
      <div class="top d-flex justify-space-between">
        <h3 class="main-title">
          <nuxt-link to>
            <span class="full-name">دکتر مهیا ملکی</span>
            <span class="line my-1">-</span>
            <span class="skill">طب سنتی</span>
          </nuxt-link>
        </h3>

        <OnlineStatus :status="false" />
      </div>

      <div class="middle">
        <p class="skills">
          فوق تخصص روماتولوژی، تخصص داخلی، عضو هیت علمی دانشگاه علوم‌پزشکی تهران
        </p>
      </div>

      <div class="bottom d-flex justify-space-between">
        <div class="meta-wrapper d-flex justify-space-between">
          <div class="meta-item d-flex align-center">
            <v-icon color="orange" size="26">la-check-circle</v-icon>
            <span class="value">۱۲ سال سابقه</span>
          </div>
          <div class="meta-item d-flex align-center">
            <v-icon color="orange" size="26">la-phone-volume</v-icon>
            <span class="value">۲۵ تماس موفق</span>
          </div>
          <div class="meta-item d-flex align-center">
            <v-icon color="orange" size="26">la-money-bill</v-icon>
            <span class="value">۳,۰۰۰ تومان در دقیقه</span>
          </div>
        </div>

        <nuxt-link class="view-profile" to>مشاهده پروفایل</nuxt-link>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'
import OnlineStatus from '@/components/Common/OnlineStatus/OnlineStatus.vue'

@Component({
  components: {
    Icon,
    OnlineStatus,
  },
})
export default class Doctor extends Vue {}
</script>
