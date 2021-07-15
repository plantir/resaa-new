<style lang="scss" scoped>
.doctor-info-wrapper {
  width: 100%;
  max-width: 440px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  .title {
    font-size: 16px;
    font-weight: bold;
    color: #212121;
    padding-bottom: 20px;
  }
  p {
    font-size: 14px;
    line-height: 1.36;
    color: #6c6c6c;
    .phone {
      color: #f9a429;
    }
  }
  .map {
    width: 100%;
    max-width: 391px;
    height: 100%;
    max-height: 238px;
    ::v-deep {
      .GMap__Wrapper {
        height: 100%;
      }
    }
  }
  .submit {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    @include media(sm) {
      justify-content: flex-end;
    }
    .close {
      color: #35d6c1;
      width: 100%;
      height: 36px;
      background: #fff;
      @include media(sm) {
        width: 151px;
      }
    }
  }
}
</style>

<template>
  <div class="doctor-info-wrapper">
    <h2 class="title">آدرس مطب {{ scope.clinicNumber }}</h2>
    <p class="street">{{ scope.data.street }}</p>
    <p class="hoursActive">ساعت حضور: {{ scope.data.description }}</p>
    <p class="phone-number">
      <span>تلفن مطب: </span>
      <span class="phone">{{ scope.data.phoneNumber }}</span>
    </p>
    <div class="map" v-if="scope.data.latitude && scope.data.longitude">
      <GMap
        ref="mapRef"
        :center="{ lat: scope.data.latitude, lng: scope.data.longitude }"
        :zoom="18"
        style="width: 100%; height: 100%"
      >
        <GMapMarker
          ref="mapMarker"
          :position="{ lat: scope.data.latitude, lng: scope.data.longitude }"
        />
      </GMap>
    </div>
    <div class="submit">
      <v-btn outlined class="close" @click="$emit('hide')">بستن</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class ReferralComponent extends Vue {
  @Prop({
    type: Object,
  })
  readonly scope!: any
}
</script>
