<style lang="scss" scoped>
.box {
  margin-top: 12px;
  min-width: 310px;
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
      padding: 0 24px;
      li {
        > div {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          color: #6c6c6c;
          font-size: 14px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.36;
          letter-spacing: normal;
          text-align: right;
          padding: 1rem 0;
          .sendAnswer {
            border: 1px solid #35d6c1;
            color: #35d6c1;
            width: 151px;
            padding: 0.7rem 0;
            border-radius: 8px;
            margin-left: 0.5rem;
            @include media(xl) {
              margin-left: 0;
            }
          }
          .directCall {
            border-radius: 8px;
            width: 120px;
            padding: 0.7rem;
            color: #fff;
            box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.5);
            background-image: linear-gradient(256deg, #13d1f3, #35d6c1);
          }
          &.call {
            padding: 1rem 0 2rem;
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
        &:not(:last-child) {
          border-bottom: 1px solid #d9d9d9;
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
        <v-img
          width="100%"
          height="100%"
          :src="`/api/${doctor.imagePath}`"
          :alt="fullName"
        />
        <span class="available" :class="statusClass">{{ statusText }}</span>
      </div>
      <div class="doctor_name">
        <h1>{{ fullName }}</h1>
        <div>
          <span>
            <img src="@/assets/img/ic_call.png" alt />
          </span>
          <span>{{ doctor.satisfiedCalls | persianDigit }} تماس موفق</span>
        </div>
      </div>
      <div class="doctor_info">
        <ul>
          <li>
            <div>
              <span>تخصص:</span>
              <span>{{ doctor.specialtyTitle }}</span>
            </div>
          </li>
          <li v-if="doctor.medicalCouncilNumber">
            <div>
              <span>کد نظام پزشکی:</span>
              <span>{{ doctor.medicalCouncilNumber | persianDigit }}</span>
            </div>
          </li>
          <li>
            <div>
              <span>تماس مستقیم با پزشک:</span>
              <span>{{ ' 021-21546523' | persianDigit }}</span>
            </div>
          </li>
          <li>
            <div class="call">
              <span>تعرفه تماس:</span>
              <span>
                {{ +doctor.minimumPrice | currency | persianDigit }} تومان
                {{
                  doctor.pricePolicyType == 'PerMinutes'
                    ? 'در دقیقه'
                    : 'در جلسه'
                }}
              </span>
            </div>
            <div v-for="(item, index) in doctor.workplaces" :key="index">
              <span>آدرس مطب {{ (index + 1) | persianDigit }}:</span>
              <span>
                <a @click="showWorkplace(item, index)">نمایش آدرس</a>
              </span>
            </div>
            <div v-if="isCallPage">
              <v-btn
                block
                outlined
                exact
                :to="`${$route.fullPath.replace('/call', '')}`"
                class="sendAnswer"
              >
                بازگشت به پروفایل
              </v-btn>
            </div>
            <div v-else>
              <v-btn
                :to="`${$route.fullPath}/experiement`"
                class="sendAnswer"
                outlined
              >
                ارسال جواب آزمایش
              </v-btn>
              <v-btn :to="`${$route.fullPath}/call`" class="directCall">
                تماس مستقیم
              </v-btn>
            </div>
          </li>
          <li v-if="false">
            <div>
              <span>
                <img src="@/assets/img/ic_share.png" alt />
                <span>
                  <a href>اشتراک گذاری</a>
                </span>
              </span>
              <span>
                <img src="@/assets/img/ic_contacts.png" alt />
                <span>
                  <a href>افزودن به مخاطبین</a>
                </span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Doctor } from '~/models/Doctor'
import doctorAddress from '@/components/Common/Doctor/ClinicAddressDialog.vue'
@Component
export default class component_name extends Vue {
  @Prop({ required: true })
  doctor!: Doctor

  get isCallPage() {
    return this.$route.name?.includes('call')
  }

  get fullName() {
    return `${this.doctor.title ? this.doctor.title : ''} ${
      this.doctor.firstName
    } ${this.doctor.lastName}`
  }

  get statusClass() {
    return this.doctor.isCurrentlyAvailable ? 'online' : 'offline'
  }

  get statusText() {
    return this.doctor.isCurrentlyAvailable ? 'در دسترس' : 'خارج از دسترس'
  }

  showWorkplace(item: any, index: number) {
    this.$dialog.show({
      component: doctorAddress,
      scope: {
        data: item,
        clinicNumber: index + 1,
      },
    })
  }
}
</script>
