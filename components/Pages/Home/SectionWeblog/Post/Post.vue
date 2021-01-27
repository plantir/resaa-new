<style lang="scss" scoped>
.post {
  direction: rtl;
  padding: 5px;
  height: 100%;
  h3 {
    font-size: 14px;
    line-height: 21px;
    @include media(sm) {
      line-height: 34px;
      font-size: 20px;
    }
    a {
      color: #0099b9;
    }
  }

  .bottom {
    height: 100%;
    .content {
      padding: 16px;
      font-size: 16px;
      p.desc {
        line-height: 26px;
        text-align: justify;
        font-size: 12px;
        font-weight: 500;
        @include media(sm-only) {
          height: 160px;
          overflow: hidden;
        }
        @include media(md) {
          font-size: 14px;
          font-weight: bold;
          height: 108px;
          overflow: hidden;
        }
        @include media(lg) {
          height: 80px;
          overflow: hidden;
        }
      }
    }
    .footer {
      padding: 10px;
      .time {
        font-size: 14px;
        font-weight: bold;
        color: #6c6c6c;
      }
      @include media(md) {
        .more {
          display: none;
        }
      }
      a {
        color: #35d6c1;
      }
    }
  }
}
</style>

<template>
  <div class="post">
    <v-card height="100%" class="d-flex flex-column">
      <a :href="post.link" target="_blank">
        <ImageLoader
          src="/images/home/blog/1.webp"
          :height="heightImage"
          :alt="post.title"
        />
      </a>
      <div class="bottom d-flex flex-column justify-space-between pb-1">
        <div class="content">
          <h3>
            <a :href="post.link" target="_blank">{{ post.title }}</a>
          </h3>
          <p v-if="hasDescription" class="desc mt-3" v-html="post.description">
            <!-- آیا می‌دانید با وجود نارسایی‌های تخمدان امکان بارداری وجود دارد؟
            بسیاری از بانوان می‌پندارند اگر دچار اختلال های مربوط به تخمدان و
            رحم باشند دیگر قادر نخواهند بود که صاحب فرزند شوند. در حالی که با
            پیشرفت علم پزشکی احتمال بارداری با وجود این مشکلات کاملا وجود دارد.
            در این پست کیست و تنبلی تخمدان را خواهید شناخت و علائم، علل، راه‌های
            درمانی آنها و تاثیرشان بر فرایند بارداری بررسی می‌شوند. -->
          </p>
        </div>
        <div class="footer d-flex justify-space-between">
          <div class="time">
            <span class="label">زمان تخمینی مطالعه:</span>
            <span class="value">۱۰ دقیقه</span>
          </div>

          <div class="more">
            <a :href="post.link" target="_blank">بیشتر بخوانید</a>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Post extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly post!: Object
  @Prop({
    type: Boolean,
    default: true,
  })
  readonly hasDescription!: Boolean

  @Prop({
    type: String,
    default: '200px',
  })
  readonly heightImage!: String
}
</script>
