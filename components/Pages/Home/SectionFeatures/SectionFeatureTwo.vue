<style lang="scss" scoped>
.feature-two {
  padding: 50px 0;
  direction: rtl;
  .main-title {
    width: 100%;
    font-weight: bold;
  }
  .features {
    .feature {
      width: 33%;
      @include media(xs-only) {
        width: 100%;
      }
      &:last-child {
        .image::after {
          display: none;
        }
      }
      .image {
        position: relative;
        text-align: center;
        &::after {
          position: absolute;
          left: 60px;
          bottom: 0;
          top: 0;
          margin: auto;
          content: '';
          background: url('/images/icons/ic_feature_arrow_left.png') no-repeat;
          width: 48px;
          height: 18px;
        }
      }
      h3.title {
        font-size: 16px;
      }
      p {
        color: #6c6c6c;
        line-height: 28px;
        font-weight: 500;
      }
      .desc-small {
        color: #a5a5a5;
      }
      ul {
        list-style: none;
        li {
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="feature-two">
    <v-container class="d-flex flex-column">
      <h2 class="main-title text-center full-width mb-12">
        کار با رسا خیلی ساده است
      </h2>
      <div class="features d-flex flex-wrap">
        <div class="feature">
          <div class="image">
            <Icon fileName="ic_find_doctor.png" />
          </div>
          <h3 class="title mt-10">پیدا کردن پزشک یا روان‌شناس</h3>
          <p class="desc mt-3">
            با جستجو در لیست پزشکان و روان‌شناسان .شخص مورد نظرتان را پیدا کنید.
          </p>
          <ul class="mt-7">
            <li>
              <nuxt-link to="" class="d-flex align-center">
                <span class="label">مشاهده لیست پزشکان</span>
                <Icon fileName="ic_link_left.png" class="mr-1" />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="" class="d-flex align-center">
                <span class="label">مشاهده لیست روان‌شناسان</span>
                <Icon fileName="ic_link_left.png" class="mr-1" />
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="feature">
          <div class="image">
            <Icon fileName="ic_buy_credit.png" />
          </div>
          <h3 class="title mt-10">افزایش اعتبار</h3>
          <p class="desc mt-3">
            چه تلفن هوشمند داشته باشید چه نه، می‌توانید از رسا استفاده کنید
            (اعتبار رسای شما، مستقل از حساب سیم‌کارتتان است).
          </p>
          <p class="desc-small">
            اعتبار حساب شما مستقل از سیم‌کارتتان است.
          </p>
          <v-btn @click="onIncreaseCredit">افزایش اعتبار</v-btn>
        </div>
        <div class="feature">
          <div class="image">
            <Icon fileName="img_direct_call.png" />
          </div>
          <h3 class="title mt-10">تماس تلفنی مستقیم</h3>
          <p class="desc mt-3">
            به‌راحتی و به‌طور مستقیم با پزشک یا . روان‌شناس مد نظرتان تلفنی صحبت
            کنید هزینه تماس شما به‌صورت دقیقه‌ای .محاسبه می‌شود
          </p>
          <p class="desc-small">
            تعرفه صحبت را خود پزشک یا روان‌شناس مشخص می‌کند.
          </p>
        </div>
      </div>
    </v-container>
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
