<style lang="scss" scoped>
.doctor {
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  max-width: 148px;
  margin: 0 10px;
  direction: rtl;
  padding: 0 8px 5px 8px;
  @include media(sm) {
    min-width: 190px;
  }
  .image {
    margin-top: 8px;
    img {
      max-width: 132px;
      @include media(sm) {
        min-width: 188px;
      }
      border-radius: 6px;
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
        background-color: var(--v-primary-base);
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
  <div class="doctor">
    <div class="image">
      <v-img height="190px" :src="`/api/${doctor.imagePath}`" :alt="doctor.fullNameWithTitle">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular width="2" indeterminate color="secondary"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>

    <div class="bottom">
      <div class="full-name">{{ doctor.fullNameWithTitle }}</div>
      <div class="skill">{{ doctor.specialtyTitle }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { RelatedDoctor } from '@/models/Doctor'

@Component
export default class Doctor extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly doctor!: RelatedDoctor
}
</script>
