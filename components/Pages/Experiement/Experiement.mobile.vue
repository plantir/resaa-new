<style lang="scss" scoped>
section {
  .sticky {
    background: #ffffff;
    box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.16);
    padding: 1rem 0;
    position: fixed;
    text-align: center;
    z-index: 1;
    width: 100%;
    bottom: 20px;
    .font-style {
      font-size: 14px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.36;
      letter-spacing: normal;
      text-align: center;
      margin-left: 1rem;
    }
    .sendAnswer {
      border: 1px solid #35d6c1;
      color: #35d6c1;
      width: 40%;
      padding: 0.7rem 0;
      border-radius: 8px;
      @extend .font-style;
    }
    .directCall {
      @extend .font-style;
      border-radius: 8px;
      width: 40%;
      padding: 0.7rem 0;
      color: #fff;
      box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.5);
      background-image: linear-gradient(256deg, #13d1f3, #35d6c1);
    }
  }
}
</style>
<template>
  <section>
    <div class="sticky">
      <button class="sendAnswer">ارسال جواب آزمایش</button>
      <button class="directCall">تماس مستقیم</button>
    </div>
    <Info />
    <UploadImage />
    <DescriptionImages />
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
import Info from './Mobile/Info.vue'
import UploadImage from './Mobile/UploadImage.vue'
import DescriptionImages from './Mobile/DescriptionImages.vue'
@Component({
  components: {
    Info,
    UploadImage,
    DescriptionImages,
  },
})
export default class YourComponent extends Vue {
  items = null
}
</script>
