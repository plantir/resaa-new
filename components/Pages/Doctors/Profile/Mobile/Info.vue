<style lang="scss" scoped>
.box {
  margin: 5rem 2rem 2rem;
  .v-card {
    text-align: center;
    padding-top: 192px;
  }
  .img {
    position: absolute;
    top: -16px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    width: 192px;
    height: 192px;
    .available {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: 20px;
      text-align: center;
      font-weight: 500;
      border-radius: 30px;
      padding: 0.4rem 0.3rem;
      width: 80px;
      &.online {
        background-color: #e9fbf3;
        color: #058e4b;
        font-size: 12px;
      }
      &.offline {
        background-color: #fbdde2;
        color: #eb5470;
        font-size: 10px;
      }
    }
  }
  .doctor_name {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: #000000;
      font-size: 14px;
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
        &:not(:last-child) {
          border-bottom: 1px solid #dddddd;
        }
        > div {
          > span {
            display: flex;
            justify-content: space-between;
            a {
              color: #35d6c1;
            }
          }
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
        <span class="available" :class="statusClass">{{ statusText }}</span>
      </div>
      <div class="doctor_name">
        <h1>دکتر {{ doctor.name || 'مهیا ملکی' }}</h1>
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
            <span>
              {{ +doctor.minimumPrice | currency | persianDigit }} تومان
              {{
                doctor.pricePolicyType == 'PerMinutes' ? 'در دقیقه' : 'در جلسه'
              }}
            </span>
          </li>
          <li>
            <template></template>
            <div>
              <span>آدرس مطب {{ 1 | persianDigit }}:</span>
              <span>آدرس مطب {{ 2 | persianDigit }}:</span>
            </div>
            <div>
              <span>
                <a href=""> نمایش آدرس </a>
              </span>
              <span>
                <a href=""> نمایش آدرس </a>
              </span>
            </div>
          </li>
          <li v-if="false">
            <span>
              <img src="@/assets/img/ic_share.png" alt="" />
              <span>
                <a href=""> اشتراک گذاری </a>
              </span>
            </span>
            <span>
              <img src="@/assets/img/ic_contacts.png" alt="" />
              <span>
                <a href=""> افزودن به مخاطبین </a>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Doctor } from '~/models/Doctor'
@Component
export default class component_name extends Vue {
  @Prop()
  doctor!: Doctor
  get statusClass() {
    return this.doctor.isCurrentlyAvailable ? 'online' : 'offline'
  }
  get statusText() {
    return this.doctor.isCurrentlyAvailable ? 'در دسترس' : 'خارج از دسترس'
  }
}
</script>
