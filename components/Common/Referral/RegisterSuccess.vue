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
  justify-content: center;
  @include media(sm) {
    justify-content: flex-end;
  }
  .close {
    color: #35d6c1;
    width: 151px;
    height: 36px;
    background: #fff;
  }
}
</style>

<template>
  <div class="register-mobile">
    <div class="description">
      <p>
        لینک عضویت در رسا برای شماره {{ mobile | persianDigit }} ارسال شد. پس از
        عضویت و انجام اولین تماس توسط این شماره، ۱۰,۰۰۰ تومان اعتبار رایگان به
        شما اعطا خواهد شد.
      </p>
      <p>
        ممنون از حسن همکاری شما.
      </p>
    </div>

    <div class="submit">
      <v-btn outlined class="close" @click="$emit('close')">بستن</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: {},
})
export default class ReferralSuccessComponent extends Vue {
  @Prop()
  mobile!: any
}
</script>
