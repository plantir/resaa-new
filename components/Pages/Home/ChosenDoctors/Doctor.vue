<style lang="scss" scoped>
.doctor {
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  max-width: 150px;
  direction: rtl;
  padding: 5px;
  @include media(sm) {
    min-width: 190px;
  }
  .image {
    border-radius: 4px;
    text-align: center;
    img {
      max-width: 132px;
      min-height: 132px;
      @include media(sm) {
        min-width: 188px;
        min-height: 188px;
      }
    }
  }
  .bottom {
    font-size: 12px;
    .full-name {
      font-weight: bold;
      position: relative;
      line-height: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #4b4b4b;
      &::before {
        background-color: #e6e6e6;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
      }
      &::after {
        background-color: #f9a429;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 20px;
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
      font-size: 12px;
    }
  }
}
</style>

<template>
  <v-card class="doctor">
    <nuxt-link :to="doctorLink">
      <div class="image">
        <img
          :src="`/api/${doctor.imagePath}`"
          :alt="doctor.fullName || doctor.fullNameWithTitle"
        />
      </div>

      <div class="bottom">
        <div class="full-name">
          {{ doctor.fullName || doctor.fullNameWithTitle }}
        </div>
        <div class="skill">
          {{ doctor.specialtyTitle || doctor.specialtyTitle }}
        </div>
      </div>
    </nuxt-link>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { RelatedDoctor } from '~/models/Doctor'

@Component
export default class Doctor extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly doctor!: any

  get doctorLink() {
    return `/doctors/${(this.doctor.specialtyEnglishTitle || '')
      .toLowerCase()
      .replace(/ /g, '-')}/${this.doctor.subscriberNumber}`
  }
}
</script>
