<style lang="scss" scoped>
.form-call {
  font-weight: 500;
  font-size: 12px;
  .main-title {
    border-bottom: 2px solid #e6e6e6;
    font-weight: bold;
    position: relative;
    line-height: 40px;
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

  .submit {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    background-color: #fff;
    line-height: 64px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
  }
}
</style>

<template>
  <div class="form-call">
    <div class="main-title">درخواست رزرو تماس</div>
    <p class="desc mt-4">
      در حال حاضر، خانم دکتر ملکی در دسترس نیست. شما می‌توانید از ایشان بخواهید
      که با شما تماس بگیرند. این تماس تا ۲۴ ساعت آینده اتفاق می‌افتد.
    </p>
    <p class="desc mt-4">
      برای تاثیر بیشتر تماس، می‌توانید یک پیام هم از شرح تماس‌تان به پزشک
      بفرستید.
    </p>
    <v-area
      v-model="message"
      placeholder="توضیحات..."
      name="desc"
      v-validate="'required'"
      :error-messages="errors.collect('desc')"
      data-vv-as="توضیحات"
      outlined
    />

    <div class="submit">
      <v-container class="d-flex justify-space-between">
        <v-btn text>انصراف</v-btn>
        <v-btn @click="onSubmit" dense>ارسال درخواست رزرو تماس</v-btn>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FormCall extends Vue {
  message = ''

  onSubmit() {
    this.$validator.validate().then((valid) => {
      if (valid) {
        this.$emit('submit', this.message)
      }
    })
  }
}
</script>
