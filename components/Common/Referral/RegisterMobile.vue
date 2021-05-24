<style lang="scss" scoped>
.description {
  font-size: 14px;
  font-weight: 500;
  color: #6c6c6c;
  line-height: 1.79;
  padding: 30px 0 20px;
}
.submit {
  display: flex;
  justify-content: flex-end;

  .resaa-btn {
    width: 176px;
    height: 36px;
  }
  .cancel {
    color: #35d6c1;
    padding-left: 64px;
  }
}
</style>

<template>
  <div class="register-mobile">
    <div class="description">
      برای دریافت ۱۰,۰۰۰ تومان اعتبار رایگان، دوستان خود را به رسا دعوت کنید.
    </div>
    <div class="mobile-field">
      <v-text-field
        v-model="mobile"
        outlined
        label="شماره موبایل دوست"
        v-validate="'required|mobile'"
        data-vv-as="موبایل"
        :error-messages="errors.collect('mobile')"
        autocomplete="off"
        name="mobile"
      ></v-text-field>
    </div>
    <div class="submit">
      <v-btn text class="cancel" @click="$emit('cancel')">انصراف</v-btn>
      <v-btn
        class="resaa-btn"
        :disabled="!mobile || Boolean(mobileError)"
        @click="save"
        large
        >پیامک شدن لینک دعوت</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class ReferralRegisterComponent extends Vue {
  mobile = null
  save() {
    this.$emit('getMobile', this.mobile)
  }
  get mobileError() {
    if (this.$validator.errors.first('mobile')) {
      return true
    } else {
      return false
    }
  }
}
</script>
