<style lang="scss" scoped>
.box {
  margin: 3rem 2rem 2rem;
  .title {
    > div {
      display: flex;
      align-items: center;
      span {
        display: flex;
        align-items: center;
        img {
          height: 32px;
          width: 32px;
        }
      }
      span:last-child {
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.63;
        letter-spacing: normal;
        text-align: right;
        color: #212121;
        padding: 0 0.7rem;
      }
    }
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    position: relative;
    width: 100%;
    &::before {
      background-color: #d9d9d9;
      height: 1px;
      width: 100%;
      content: '';
      position: absolute;
      bottom: 0;
    }
    &::after {
      background-color: #f9a429;
      height: 3px;
      width: 30px;
      content: '';
      position: absolute;
      bottom: -1px;
      right: 0;
    }
  }
  .card_wrapper {
    display: flex;
    justify-content: space-between;
    .v-card {
      border-radius: 8px;
      padding: 0 1rem;
      margin-top: 1rem;
      flex: 0 0 28%;
      .images_wrapper {
        display: flex;
        justify-content: space-around;
        padding: 1rem 0 2rem;
        .images {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          position: relative;
          .sample {
            width: 99px;
            height: 181px;
          }
          .expand {
            border-radius: 4px;
            background-color: #35d6c1;
            width: 18px;
            height: 18px;
            text-align: center;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
      }
      .text_wrapper {
        text-align: right;
        padding-bottom: 2rem;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        font-weight: bold;
        .title_text {
          font-size: 16px;
          line-height: 1.38;
          color: #f9a429;
        }
        .text {
          font-size: 14px;
          line-height: 1.71;
          padding-top: 1rem;
          color: #6c6c6c;
        }
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <div class="title">
      <div>
        <span>
          <img src="~assets/img/experiement/attention@2x.png" alt="" />
        </span>
        <span>
          تصاویر ارسالی شما باید ویژگی‌های زیر را داشته باشد؛ در غیر این صورت،
          به‌احتمال زیاد توسط پزشک رد می‌گردد.
        </span>
      </div>
    </div>
    <div class="card_wrapper">
      <v-card v-for="(item, index) in content_boxes" :key="index">
        <div class="images_wrapper">
          <div class="images">
            <div>
              <img :src="item.icon_correct" alt="" />
            </div>
            <div class="sample">
              <img :src="item.image_correct" alt="" />
            </div>
            <div class="expand">
              <a href="">
                <img src="~assets/img/experiement/expand.png" alt="" />
              </a>
            </div>
          </div>
          <div class="images">
            <div>
              <img :src="item.icon_close" alt="" />
            </div>
            <div class="sample">
              <img :src="item.image_wrong" alt="" />
            </div>
          </div>
        </div>
        <div class="text_wrapper">
          <div class="title_text">
            {{ item.title }}
          </div>
          <div class="text">{{ item.text }}</div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
@Component
export default class component_name extends Vue {
  content_boxes = [
    {
      icon_correct: require('@/assets/img/experiement/correct.png'),
      icon_close: require('@/assets/img/experiement/close.png'),
      image_correct: require('@/assets/img/experiement/img_correct_image.png'),
      image_wrong: require('@/assets/img/experiement/img_white_image.png'),
      title: ' واضح باشد و متن‌ها کاملا خوانا باشند.',
      text:
        'تصویر شما نباید تارباشد و متن‌ها باید به سادگی خوانده شوند عکس را در روشنایی بگیرید.',
    },
    {
      icon_correct: require('@/assets/img/experiement/correct.png'),
      icon_close: require('@/assets/img/experiement/close.png'),
      image_correct: require('@/assets/img/experiement/img_correct_image.png'),
      image_wrong: require('@/assets/img/experiement/img_dark_image.png'),
      title: ' پس‌زمینه آن روشن باشد',
      text:
        'برگه آزمایش شما نباید روی فرش یا هر سطحی با پس‌زمینه تیره قرار گرفته باشد. برگه را بر روی سطحی صاف و روشن قرار دهید و سپس از آن عکس بگیرید.',
    },
    {
      icon_correct: require('@/assets/img/experiement/correct.png'),
      icon_close: require('@/assets/img/experiement/close.png'),
      image_correct: require('@/assets/img/experiement/img_correct_image.png'),
      image_wrong: require('@/assets/img/experiement/img_perspective.png'),
      title: ' تصویر به صورت عمودی باشد',
      text:
        'برگه ازمایش را روی سطحی صاف قرار دهید و از بالا و به‌صورت عمودی از آن عکس بگیرید.',
    },
  ]
}
</script>
