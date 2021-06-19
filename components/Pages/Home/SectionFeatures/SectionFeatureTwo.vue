<style lang="scss" scoped>
.feature-two {
  padding: 50px 30px;
  direction: rtl;
  .feature-title {
    text-align: center;
    font-size: 20px;
    color: #212121;
    font-weight: bold;
    padding-bottom: 30px;
    @include media(sm) {
      font-size: 24px;
      padding-bottom: 60px;
    }
  }
  .features {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .feature {
      width: 26%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 140px;
      @include media(sm) {
        margin-bottom: 0;
        text-align: right;
        justify-content: start;
        align-items: flex-start;
      }
      @include media(xs-only) {
        width: 100%;
      }
      .img-mobile-margin {
        @include media(xs-only) {
          margin-right: 35px;
        }
      }
      .image {
        width: 100%;
        display: flex;
        justify-content: center;
        @include media(sm) {
          // justify-content: flex-start;
        }
        img {
          display: block;
          width: auto;
          height: 240px;
          @include media(sm-only) {
            height: 125px;
          }
        }
      }
      .title-item {
        font-size: 15px;
        padding: 10px 0 12px;
        @include media(sm) {
          padding: 50px 36px 12px 0;
        }
      }
      .desc {
        color: #6c6c6c;
        line-height: 24px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 500;
        @include media(sm) {
          padding-right: 36px;
        }
      }
      p {
        margin-bottom: 0;
      }
      .desc-small {
        color: #a5a5a5;
        padding-top: 8px;
        @include media(sm) {
          padding-right: 36px;
        }
      }
      .resaa-btn {
        width: 122px;
        height: 36px;
        margin-top: 24px;
        border-radius: 8px;
        @include media(sm) {
          margin-top: 0;
          margin-right: 36px;
        }
      }
      .feature-list {
        list-style: none;
        padding-top: 24px;
        @include media(sm) {
          padding-right: 36px;
        }
        li {
          margin-bottom: 20px;
          font-size: 14px;
          @include media(sm) {
            margin-bottom: 15px;
          }
          a {
            color: #35d6c1;
          }
        }
      }
      &::after {
        background: url('/images/icons/ic_feature_arrow_left.png') no-repeat;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -70px;
        top: auto;
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
          top: -250px;
        }
        @include media(sm-only) {
          transform: scale(0.5);
          left: -20px;
          top: -140px;
        }
      }
      &:last-child {
        margin-bottom: 0;
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>

<template>
  <div class="feature-two">
    <h2 class="feature-title">کار با رسا خیلی ساده است</h2>
    <div class="features">
      <div class="feature">
        <div class="image">
          <div>
            <Icon :size="300" fileName="ic_find_doctor.png" />
          </div>
        </div>
        <h3 class="title-item">پیدا کردن پزشک یا روان‌شناس</h3>
        <p class="desc">
          با جستجو در لیست پزشکان و روان‌شناسان .شخص مورد نظرتان را پیدا کنید.
        </p>
        <ul class="feature-list">
          <li>
            <nuxt-link to="/doctors" class="d-flex align-center">
              <span class="label">مشاهده لیست پزشکان</span>
              <div>
                <Icon :size="18" fileName="ic_link_left.png" class="mr-1" />
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/doctors" class="d-flex align-center">
              <span class="label">مشاهده لیست روان‌شناسان</span>
              <div>
                <Icon :size="18" fileName="ic_link_left.png" class="mr-1" />
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="feature">
        <div class="image img-mobile-margin">
          <div>
            <Icon :size="300" fileName="ic_buy_credit2.png" />
          </div>
        </div>
        <h3 class="title-item">
          {{
            $device.isMobile ? 'پرداخت هزینه مشاوره تصویری' : 'افزایش اعتبار'
          }}
        </h3>
        <p class="desc" v-if="$device.isMobile">
          چه تلفن هوشمند داشته باشید چه نه، می‌توانید از رسا استفاده کنید
          (اعتبار رسای شما، مستقل از حساب سیم‌کارتتان است).
        </p>
        <p class="desc" v-else>
          چه تلفن هوشمند داشته باشید چه نه، می‌توانید از رسا استفاده کنید.
        </p>
        <p class="desc-small" v-if="!$device.isMobile">
          اعتبار حساب شما مستقل از سیم‌کارتتان است.
        </p>
        <v-btn class="resaa-btn mt-4" @click="onIncreaseCredit">
          افزایش اعتبار
        </v-btn>
      </div>
      <div class="feature">
        <div class="image">
          <div>
            <Icon :size="300" fileName="img_direct_call.png" />
          </div>
        </div>
        <h3 class="title-item">
          {{
            $device.isMobile
              ? 'تماس تصویری با پزشک یا روان‌شناس'
              : '     تماس تلفنی مستقیم'
          }}
        </h3>
        <p v-if="$device.isMobile">
          چه تلفن هوشمند داشته باشید چه نه، می‌توانید از رسا استفاده کنید
          (اعتبار رسای شما، مستقل از حساب سیم‌کارتتان است).
        </p>
        <p class="desc" v-else>
          به‌راحتی و به‌طور مستقیم با پزشک یا . روان‌شناس مد نظرتان تلفنی صحبت
          .کنید هزینه تماس شما به‌صورت دقیقه‌ای محاسبه می‌شود
        </p>
        <p class="desc-small">
          تعرفه صحبت را خود پزشک یا روان‌شناس مشخص می‌کند.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
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
