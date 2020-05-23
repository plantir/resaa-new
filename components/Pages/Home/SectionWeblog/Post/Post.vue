<style lang="scss" scoped>
.post {
  direction: rtl;
  padding: 5px;
  h3 {
    font-size: 14px;
    line-height: 28px;
    a {
      color: #0099b9;
    }
  }
  .content {
    padding: 10px;
    p.desc {
      line-height: 26px;
      text-align: justify;
    }
  }

  .footer {
    padding: 10px;
    a {
      color: #35d6c1;
    }
  }
}
</style>

<template>
  <div class="post">
    <v-card>
      <v-img src="/images/home/blog/1.png" height="260px" />
      <div class="content">
        <h3>
          <nuxt-link to="">
            درمان کیست و تنبلی تخمدان برای بارداری و درمان کیست و تنبلی تخمدان
            برای بارداری
          </nuxt-link>
        </h3>
        <p class="desc mt-5">
          آیا می‌دانید با وجود نارسایی‌های تخمدان امکان بارداری وجود دارد؟
          بسیاری از بانوان می‌پندارند اگر دچار اختلال های مربوط به تخمدان و رحم
          باشند دیگر قادر نخواهند بود که صاحب فرزند شوند. در حالی که با پیشرفت
          علم پزشکی احتمال بارداری با وجود این مشکلات کاملا وجود دارد. در این
          پست کیست و تنبلی تخمدان را خواهید شناخت و علائم، علل، راه‌های درمانی
          آنها و تاثیرشان بر فرایند بارداری بررسی می‌شوند.
        </p>
      </div>
      <div class="footer d-flex justify-space-between">
        <div class="time">
          <span class="label">زمان تخمینی مطالعه:</span>
          <span class="value">۱۰ دقیقه</span>
        </div>

        <div class="more">
          <a href="#">
            بیشتر بخوانید
          </a>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly post!: Object
}
</script>
