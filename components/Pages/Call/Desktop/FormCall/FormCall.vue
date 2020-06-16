<style lang="scss" scoped>
.form-call {
  font-weight: 500;
  font-size: 16px;
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
    .group {
      width: 270px;
      line-height: 64px;
      text-align: left;
    }
  }
}
</style>

<template>
  <div class="form-call d-flex flex-column">
    <div class="main-title">درخواست رزرو تماس</div>
    <p class="desc mt-4">
      در حال حاضر، خانم دکتر ملکی در دسترس نیست. شما می‌توانید از ایشان بخواهید
      که با شما تماس بگیرند. این تماس تا ۲۴ ساعت آینده اتفاق می‌افتد.
    </p>
    <p class="desc mt-4">
      برای تاثیر بیشتر تماس، می‌توانید یک پیام هم از شرح تماس‌تان به پزشک
      بفرستید.
    </p>
    <v-textarea
      v-model="form.desc"
      placeholder="متن پیام را بنویسید..."
      name="desc"
      v-validate="'required'"
      :error-messages="errors.collect('desc')"
      data-vv-as="متن پیام"
      outlined
    />

    <div class="submit d-flex justify-end">
      <div class="group">
        <v-btn text>انصراف</v-btn>
        <v-btn @click="onSubmit" large>ارسال درخواست رزرو تماس</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class FormCall extends Vue {
  form = {}

  onSubmit() {
    this.$validator.validate().then(valid => {
      if (valid) {
        this.$emit('submit')
      }
    })
  }
}
</script>
