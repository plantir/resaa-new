<style lang="scss" scoped>
.feature-type-one {
  width: 100%;
  .main-title {
    font-weight: bold;
  }
  .content {
    padding: 14px;
    .innder-title {
      font-weight: bold;
    }
    .desc {
      color: #5e696e;
      line-height: 25px;
      font-size: 13px;
    }
  }
}
</style>

<template>
  <div class="feature-type-one">
    <div class="main-title text-center">صرفا جهت اطلاع</div>
    <v-card class="mt-6">
      <div class="content d-flex flex-column align-center">
        <Icon fileName="ic_save_time.png" />
        <div class="innder-title text-center mt-2">
          اتلاف وقت کمتر و صرفه‌جویی در زمان
        </div>
        <div class="desc text-center mt-1">
          مشورت کردن با پزشک یا روانشناس نیاز به طی کردن مسیرهای طولانی، ماندن
          در ترافیک و انتظار در مطب ندارد. با یک تماس مستقیم با پزشکان یا
          روانشناسان رسا می‌توانید از همه اینها دوری کنید.
        </div>
      </div>
    </v-card>
    <v-card class="mt-6">
      <div class="content d-flex flex-column align-center">
        <Icon fileName="ic_save_money_small.png" />
        <div class="innder-title text-center mt-2">
          پرداخت هزینه کمتر
        </div>
        <div class="desc text-center mt-1">
          اگر بخواهید به صورت حضوری در مطب از یک پزشک یا روان‌شناس مشورت بگیرید،
          باید هزینه ویزیت را کامل پرداخت کنید، در حالی که شاید چند دقیثه بیشتر
          کارتان طول نکشد. هزینه رفت و آمد و هزینه‌های مرخصی گرفتن و کار نکردن
          را هم به آن اضافه کنید. با استفاده از رسا هزینه شما بسیار کمتر می‌شود.
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class FeatureTypeOne extends Vue {}
</script>
