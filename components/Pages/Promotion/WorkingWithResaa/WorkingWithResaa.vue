<style lang="scss" scoped>
.working-wrapper {
  padding: 56px 0;
  width: 100%;
  .working-title {
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: #212121;
    font-weight: bold;
    padding-bottom: 60px;
    @include media(sm) {
      font-size: 16px;
      padding-bottom: 22px;
    }
  }
  .images-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @include media(sm) {
      flex-direction: row;
    }
    .image-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      @include media(xs-only) {
        padding-bottom: 162px;
      }
      .image {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: auto;
          height: 153px;
          @include media(xs-only) {
            height: 315px;
            width: 300px;
          }
        }
      }
      .title-item {
        font-size: 12px;
        font-weight: bold;
        color: #000000;
        padding-top: 20px;
        @include media(xs-only) {
          font-size: 14px;
          padding-top: 8px;
        }
      }
      &::after {
        background: url('/images/icons/ic_feature_arrow_left.png') no-repeat;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 70px;
        margin: auto;
        content: '';
        width: 48px;
        height: 18px;
        transform: rotate(-90deg);
        @include media(sm) {
          transform: rotate(0);
          right: auto;
          left: -85px;
          bottom: 0;
          top: -50px;
        }
        @include media(xl-only) {
          left: -250px;
        }
      }
      &:last-child {
        padding-bottom: 0;
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>

<template>
  <span class="working-wrapper">
    <h2 class="working-title">کار با رسا خیلی ساده است</h2>
    <div class="images-wrapper">
      <div class="image-item">
        <div class="image">
          <Icon fileName="ic_find_doctor.png" />
        </div>
        <h3 class="title-item">پیدا کردن پزشک یا روان‌شناس</h3>
      </div>
      <div class="image-item">
        <div class="image">
          <Icon fileName="ic_buy_credit2.png" />
        </div>
        <h3 class="title-item">
          {{
            $device.isMobile ? 'پرداخت هزینه مشاوره تصویری' : 'افزایش اعتبار'
          }}
        </h3>
      </div>
      <div class="image-item">
        <div class="image">
          <Icon fileName="img_direct_call.png" />
        </div>
        <h3 class="title-item">
          {{
            $device.isMobile
              ? 'تماس تصویری با پزشک یا روان‌شناس'
              : '     تماس تلفنی مستقیم'
          }}
        </h3>
      </div>
    </div>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class SectionFeatureTwo extends Vue {
  onIncreaseCredit() {
    this.$router.push('/charge')
  }
}
</script>
