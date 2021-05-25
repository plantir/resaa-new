<style lang="scss" scoped>
.doctor {
  height: 128px;
  border-radius: 8px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  .avatar {
    width: 110px;
    margin-right: -10px;
    position: relative;
    .image {
      border-radius: 4px;
      width: 112px;
      height: 112px;
    }
    .available {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: 10px;
      text-align: center;
      font-weight: 500;
      border-radius: 30px;
      width: 78px;
      height: 30px;
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
  .left-side {
    width: calc(100% - 110px);
  }
  .link {
    a {
      color: #35d6c1;
    }
  }
}
</style>

<template>
  <div class="doctor d-flex align-center">
    <div class="avatar">
      <!-- <ImageLoader
        :src="`/api/${doctor.imagePath}`"
        :alt="fullName"
        width="112"
        height="112"
      /> -->
      <img class="image" :src="`/api/${doctor.imagePath}`" :alt="fullName" />
      <span class="available" :class="statusClass">{{ statusText }}</span>
    </div>
    <div class="left-side d-flex flex-column align-center">
      <div class="full-name font-weight-bold">{{ fullName }}</div>
      <div class="skil mt-3">{{ doctor.speciality }}</div>
      <div class="link mt-5">
        <nuxt-link :to="doctorLink">مشاهده پروفایل</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Doctor extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly doctor!: Object | any

  get fullName() {
    return `${this.doctor.firstName} ${this.doctor.lastName}`
  }

  get doctorLink() {
    let name =
      this.doctor.specialityEnglishTitle ||
      this.doctor.specialtyEnglishTitle ||
      ''
    return `/doctors/${name.toLowerCase().replace(/ /g, '-')}/${
      this.doctor.subscriberNumber
    }`
  }
  get statusClass() {
    return this.doctor.isCurrentlyAvailable || this.doctor.available
      ? 'online'
      : 'offline'
  }

  get statusText() {
    return this.doctor.isCurrentlyAvailable || this.doctor.available
      ? 'در دسترس'
      : 'خارج از دسترس'
  }
}
</script>
