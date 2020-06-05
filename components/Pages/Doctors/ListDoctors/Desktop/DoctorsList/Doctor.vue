<style lang="scss" scoped>
.doctor {
  position: relative;
  height: 192px;
  .avatar {
    margin-right: -15px;
    width: 160px;
    height: 160px;
  }
  .left-side {
    width: calc(100% - 160px);
    height: 100%;
    padding: 35px 25px 25px 5px;

    .top {
      .main-title {
        font-size: 18px;
        .full-name {
          color: #212121;
        }
        .line,
        .skill {
          color: #5e696e;
        }
      }
    }

    .middle {
      font-size: 12px;
      font-weight: bold;
      color: #4b4b4b;
    }

    .bottom {
      font-size: 12px;
      font-weight: bold;
      color: #212121;
      .meta-wrapper {
        width: calc(100% - 160px);
        .meta-item {
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
          <nuxt-link to="">
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
            <i class="las la-check-circle"></i>
            <span class="value">۱۲ سال سابقه</span>
          </div>
          <div class="meta-item d-flex align-center">
            <i class="las la-phone-volume"></i>
            <span class="value">۲۵ تماس موفق</span>
          </div>
          <div class="meta-item d-flex align-center">
            <i class="las la-dot-circle"></i>
            <span class="value">۳,۰۰۰ تومان در دقیقه</span>
          </div>
        </div>

        <nuxt-link class="view-profile" to="">مشاهده پروفایل</nuxt-link>
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
