<style lang="scss" scoped>
footer {
  background-color: #383838;
  color: #a5a5a5;
  padding-top: 20px;
  @include media(sm) {
    background: url('/images/footer/img_phone_gray.png') no-repeat #383838;
    background-position: 0 160px;
  }
  .box.about {
    color: #a5a5a5;
    .desc {
      line-height: 28px;
    }
  }

  .box {
    .main-title {
      display: inline-block;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      position: relative;
      line-height: 50px;
      padding-left: 50px;
      &::before {
        background-color: #a5a5a5;
        height: 2px;
        width: 100%;
        content: '';
        position: absolute;
        bottom: 0;
      }
      &::after {
        background-color: #35d6c1;
        height: 4px;
        width: 60px;
        content: '';
        position: absolute;
        bottom: -1px;
        right: 0;
      }
    }
    .box-content {
      padding: 20px 0;
      ul {
        list-style: none;
        li {
          line-height: 40px;
          a {
            color: #a5a5a5;
          }
        }
      }
      address {
        font-style: normal;
        line-height: 28px;
      }
    }
    &.useful-links {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          margin-left: 10px;
        }
        @include media(sm) {
          display: unset;
          li {
            margin-left: unset;
          }
        }
      }
    }
  }
  .copy-right {
    position: relative;
    margin-top: 10px;
    p {
      line-height: 28px;
      text-align: right;
      @include media(sm) {
        text-align: center;
      }
    }
    .icon-footer {
      width: 100%;
      position: absolute;
      top: -60px;
      text-align: center;
      &::after,
      &::before {
        background: #35d6c1;
        position: absolute;
        display: block;
        content: '';
        width: calc(50% - 22px);
        height: 1px;
        top: 33px;
        right: 0;
      }
      &::after {
        width: calc(50% - 17px);
        background: #13d1f3;
        left: 0;
        right: auto;
      }
    }
  }
}
</style>
<template>
  <footer>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" lg="4" xl="4">
          <div class="box about">
            <div class="box-content">
              <Logo />
              <p class="desc text-justify mt-5">
                رِسا اولین سامانه ارتباط پزشک با بیمار در کشور است. بیماران عزیز
                به‌راحتی و بدون نیاز به حضور در مطب پزشک می توانند با پزشک خود
                از هر مکانی در ارتباط باشند. پزشکان گرامی نیز می‌توانند تماس‌های
                بیماران خود را در سامانه رِسا مدیریت کنند.
              </p>
            </div>
          </div>
          <div class="box enamad">
            <div class="box-content">
              <v-img
                width="100"
                height="100"
                src="/images/footer/e-namad.png"
                alt
                @click="enamadClick"
                style="cursor: pointer"
                id="1p93aagdwcp8JwYd"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="12" lg="8" xl="8">
          <v-row>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
              <div class="box useful-links">
                <div class="main-title">لینک‌های مفید</div>
                <div class="box-content">
                  <ul>
                    <li>
                      <nuxt-link to="/patient/profile">حساب کاربری</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/doctors">لیست پزشکان</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">رسای بیماران</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/">دریافت برنامه بیماران</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/privacy">قوانین</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/privacy">حریم خصوصی</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/faq">سوالات متداول</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/about">درباره رسا</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/contact-us">تماس با ما</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6" xl="6">
              <div class="box contact">
                <div class="main-title">ارتباط با ما</div>
                <div class="box-content">
                  <ul>
                    <li class="d-flex justify-space-between">
                      <span class="label">پشتیبانی بیماران:</span>
                      <span class="value">۷۴۴۷۱۳۰۰ - ۰۲۱</span>
                    </li>
                    <li class="d-flex justify-space-between">
                      <span class="label">پشتیبانی پزشکان:</span>
                      <span class="value">۷۴۴۷۱۲۰۰ - ۰۲۱</span>
                    </li>
                    <li class="d-flex justify-space-between">
                      <span class="label">ایمیل:</span>
                      <span class="value">info@resaa.net</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box address">
                <div class="main-title">آدرس</div>
                <div class="box-content">
                  <address>
                    تهران، امیرآباد شمالی، پایین‌تر از بیمارستان قلب، کوچه
                    گردآفرید، خیابان هیأت، پلاک 15، واحد 211 پارک علم و فناوری
                    دانشگاه تربیت مدرس
                  </address>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="copy-right d-flex justify-center align-center">
      <div class="icon-footer">
        <div>
          <img src="/images/icons/footer.png" width="96" height="51" alt="" />
          <!-- <Icon fileName="footer.png" /> -->
        </div>
      </div>
      <v-container>
        <p>
          کلیه حقوق مادی و معنوی این سایت به شرکت رسالت سلامت ایرانیان (برگ های
          سبز و نقره ای سابق) تعلق دارد © {{ year | persianDigit }}
        </p>
      </v-container>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '@/components/Common/Logo/Logo.vue'
import Icon from '@/components/Common/Icon/Icon.vue'
import moment from 'moment-jalaali'
@Component({
  components: {
    Logo,
    Icon,
  },
})
export default class FooterDesktop extends Vue {
  enamadClick() {
    window.open(
      'https://trustseal.enamad.ir/Verify.aspx?id=127333&amp;p=1p93aagdwcp8JwYd',
      'Popup',
      'toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30'
    )
  }
  get year() {
    return moment().jYear()
  }
}
</script>
