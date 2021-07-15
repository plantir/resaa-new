<style lang="scss" scoped>
.doctor {
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  max-width: 150px;
  margin: 0 10px;
  direction: rtl;
  padding: 0 4px 5px 4px;
  min-width: 150px;

  .image {
    margin-top: 4px;
    // height: 190px;
    img {
      // max-width: 132px;
      width: 100%;
      height: 100%;
      @include media(sm) {
        min-width: 188px;
      }
      border-radius: 6px;
    }
  }
  &.big {
    .image {
      height: 212px;
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
    }
  }
}
</style>

<template>
  <nuxt-link class="doctor" :class="size" :to="doctorLink">
    <div class="image">
      <!-- <ImageLoader
        height="190px"
        :src="`/api/${doctor.imagePath}`"
        :alt="doctor.fullNameWithTitle"
      /> -->
      <v-img
        :height="size == 'big' ? '' : '150px'"
        :width="size == 'big' ? '100%' : '150px'"
        :src="`/api/${doctor.imagePath}${size == 'big' ? '' : '?imageSize=2'}`"
        :alt="doctor.fullNameWithTitle"
      >
      </v-img>
      <!-- <img :src="`/api/${doctor.imagePath}`" :alt="doctor.fullNameWithTitle" /> -->
    </div>

    <div class="bottom">
      <div class="full-name">{{ doctor.fullNameWithTitle }}</div>
      <div class="skill">{{ doctor.specialtyTitle }}</div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { RelatedDoctor } from '~/models/Doctor'

@Component
export default class Doctor extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly doctor!: RelatedDoctor
  @Prop({
    default: 'small',
  })
  readonly size!: string

  get doctorLink() {
    return `/doctors/${(this.doctor.specialtyEnglishTitle || '')
      .toLowerCase()
      .replace(/ /g, '-')}/${this.doctor.subscriberNumber}`
  }
}
</script>
