<style lang="scss" scoped>
.box {
  margin: 5rem 2rem 2rem;

  .v-card {
    text-align: center;
  }
  .img {
    // height: 200px;
    img {
      margin-top: -20px;
    }
  }
  .doctor_name {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      // font-size: 14px;
      // font-weight: bold;
      // font-stretch: normal;
      // font-style: normal;
      // line-height: 1.07;
      // letter-spacing: normal;
      // text-align: right;
      color: #000000;
    }
    > div {
      display: flex;
      align-items: center;
      span {
        margin: 0.5rem 0;
        font-size: 15px;
        color: #707070;
        img {
          margin-right: -1rem;
          margin-left: 0.5rem;
        }
      }
    }
  }
  .doctor_info {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0 2rem;
      li {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 1rem 0;
        color: #6c6c6c;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.33;
        letter-spacing: normal;
        text-align: right;
        // font-family: IRANYekanMobileFN;
        &:not(:last-child) {
          border-bottom: 1px solid #dddddd;
        }
        > span {
          display: flex;
          align-items: center;
          a {
            padding-right: 0.5rem;
            color: #35d6c1;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <v-card>
      <div class="img">
        <img :src="doctor.img || require('@/assets/img/doctor.png')" alt="" />
      </div>
      <div class="doctor_name">
        <h3>دکتر {{ doctor.name || 'مهیا ملکی' }}</h3>
        <div>
          <span>
            <img src="@/assets/img/ic_call.png" alt="" />
          </span>
          <span> {{ 25 | persianDigit }} تماس موفق </span>
        </div>
      </div>
      <div class="doctor_info">
        <ul>
          <li>
            <span>تخصص:</span>
            <span>طب سنتی</span>
          </li>
          <li>
            <span>کد نظام پزشکی:</span>
            <span>{{ 12345 | persianDigit }}</span>
          </li>
          <li>
            <span>تماس مستقیم با پزشک:</span>
            <span>{{ ' 021-21546523' | persianDigit }}</span>
          </li>
          <li>
            <span>تعرفه تماس:</span>
            <span>{{ 3000 | currency | persianDigit }} تومان در دقیقه</span>
          </li>
          <li>
            <span>آدرس مطب {{ 2 | persianDigit }}:</span>
            <span>
              <a href="">
                نمایش آدرس
              </a>
            </span>
          </li>
          <li>
            <span>
              <img src="@/assets/img/ic_share.png" alt="" />
              <span>
                <a href="">
                  اشتراک گذاری
                </a>
              </span>
            </span>
            <span>
              <img src="@/assets/img/ic_contacts.png" alt="" />
              <span>
                <a href="">
                  افزودن به مخاطبین
                </a>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
@Component
export default class component_name extends Vue {
  doctor = {}
}
</script>
