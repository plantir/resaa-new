<style lang="scss" scoped>
.profile-progress {
  @include media(xs-only) {
    flex-wrap: wrap;
    .right,
    .left {
      min-width: 100%;
    }
    .left {
      margin-top: 15px;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      .desc {
        min-width: 100%;
        margin-bottom: 15px;
      }
      ::v-deep {
        button {
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>

<template>
  <v-card class="profile-progress d-flex justify-space-between">
    <div class="right d-flex flex-column">
      <p class="font-weight-medium main-color">
        <span class="value">{{ percentage | persianDigit }}</span> درصد از
        پروفایل شما تکمیل شده است.
      </p>
      <v-progress-linear
        background-color="13d1f3"
        height="8"
        :value="percentage"
        rounded
      />
    </div>

    <div class="left d-flex align-center">
      <div class="desc font-weight-medium">
        اطلاعات شخصی خود ا تکمیل کنید تا بتوانیم بهتر به‌شما خدمت‌رسانی کنیم.
      </div>
      <v-btn class="mr-6 resaa-btn" @click="$emit('editProfile')"
        >تکمیل اطلاعات شخصی</v-btn
      >
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ProfileProgress extends Vue {
  @Prop({ type: String, required: true }) readonly percentage!: String
}
</script>
