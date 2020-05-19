<style lang="scss" scoped>
.doctor {
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  max-width: 148px;
  margin: 0 10px;
  direction: rtl;
  padding: 0 8px 5px 8px;
  .image {
    margin-top: 8px;
    img {
      max-width: 132px;
      border-radius: 6px;
    }
  }
  .bottom {
    font-size: 12px;
    .full-name {
      border-bottom: 2px solid #e6e6e6;
      font-weight: bold;
      position: relative;
      line-height: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &::before {
        background-color: #f9a429;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 40px;
        height: 2px;
      }
    }
    .skill {
      color: #4b4b4b;
      line-height: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
    }
  }
}
</style>

<template>
  <div class="doctor">
    <div class="image">
      <img
        max-width="140"
        src="/images/home/doctors/1.png"
        alt="دکتر محمد حاجی"
      />
    </div>

    <div class="bottom">
      <div class="full-name">
        {{ doctor.fullNameWithTitle }}
      </div>
      <div class="skill">
        {{ doctor.specialtyTitle }}
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
}
</script>
