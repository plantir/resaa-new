<style lang="scss" scoped>
.personal-information {
  .card-content {
    flex-wrap: wrap;
    .avatar {
      width: 192px;
      @include media(xs-only) {
        min-width: 100%;
        justify-content: center;
        align-content: center;
        display: flex;
      }
      .v-avatar {
        border-radius: 8px;
      }
    }
    .info-content {
      width: calc(100% - 232px);
      @include media(xs-only) {
        min-width: 100%;
        margin-right: 0 !important;
      }
    }
    .item {
      width: 50%;
      .label {
        color: #707070;
        font-size: 10px;
      }
      .value {
        font-size: 13px;
      }
    }
  }
}
</style>

<template>
  <v-card class="personal-information">
    <v-card-title primary-title>
      <div class="full-width d-flex justify-space-between">
        <div class="title">اطلاعات شخصی</div>
        <v-btn text @click="$emit('edit')">
          <span class="main-color">
            ویرایش اطلاعات
          </span>
        </v-btn>
      </div>
    </v-card-title>

    <div
      class="card-content d-flex justify-space-between mt-5"
      v-if="profile.phoneNumber"
    >
      <div class="avatar">
        <v-avatar size="192" color="dbdbdb" tile>
          <img src="/images/avatar/avatar.png" alt="alt" />
        </v-avatar>
      </div>
      <div
        class="info-content d-flex justify-space-between flex-wrap mt-5 mr-10"
      >
        <div class="item d-flex flex-column mb-5">
          <div class="label font-weight-bold">
            نام و نام خانوادگی
          </div>
          <div class="value font-weight-bold mt-2">
            {{ fullName }}
          </div>
        </div>
        <div class="item d-flex flex-column mb-5">
          <div class="label font-weight-bold">
            کد ملی
          </div>
          <div class="value font-weight-bold mt-2">
            1270838857
          </div>
        </div>
        <div class="item d-flex flex-column mb-5">
          <div class="label font-weight-bold">
            تاریخ تولد
          </div>
          <div class="value font-weight-bold mt-2">
            -
          </div>
        </div>
        <div class="item d-flex flex-column mb-5">
          <div class="label font-weight-bold">
            شهر
          </div>
          <div class="value font-weight-bold mt-2">
            -
          </div>
        </div>
        <div class="item d-flex flex-column mb-5">
          <div class="label font-weight-bold">
            شماره موبایل
          </div>
          <div class="value font-weight-bold mt-2">
            {{ profile.phoneNumber }}
          </div>
        </div>
        <div class="item d-flex flex-column mb-5">
          <div class="label font-weight-bold">
            ایمیل
          </div>
          <div class="value font-weight-bold mt-2">
            pamenary@gmail.com
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Profile } from '@/models/Auth'

@Component
export default class PersonalInformation extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly profile!: Profile

  get fullName() {
    return `${this.profile.firstName} ${this.profile.lastName}`
  }
}
</script>
