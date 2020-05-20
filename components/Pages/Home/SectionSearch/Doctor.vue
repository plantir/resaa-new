<style lang="scss" scoped>
.doctor {
  height: 128px;
  border-radius: 8px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  .avatar {
    width: 110px;
  }
  .left-side {
    width: calc(100% - 110px);
  }
}
</style>

<template>
  <div class="doctor d-flex align-center">
    <div class="avatar">
      <v-img src="/images/home/doctors/1.png" />
    </div>
    <div class="left-side d-flex flex-column align-center">
      <div class="full-name font-weight-bold">
        {{ fullName }}
      </div>
      <div class="skil mt-3">
        {{ doctor.specialty.title }}
      </div>
      <div class="link mt-5">
        <nuxt-link to="/">
          مشاهده پروفایل
        </nuxt-link>
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
  readonly doctor!: Object

  get fullName() {
    return `${this.doctor.firstName} ${this.doctor.lastName}`
  }
}
</script>
