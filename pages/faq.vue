
<style lang="scss" scoped>
.faq-container {
  line-height: 1.9;
  direction: rtl;
  background-color: white;
  padding: 45px;
  border-radius: 15px;
  @include media(md) {
    padding: 0;
  }
}
.v-expansion-panel {
  + .v-expansion-panel {
    margin-top: 8px;
  }
}
.faq-title {
  margin-bottom: 10px;
}

.highlight {
  display: inline-block;
  color: var(--v-secondary-base);
}

.section-title {
  text-align: right;
  color: var(--v-primary-base);
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.faq-section-title {
  text-align: right;
  font-weight: 700;
  font-size: 1.175rem;
  margin-bottom: 30px;
}

.section-description {
  text-align: right;
  font-size: 1.125rem;
  margin-bottom: 40px;
  margin-top: 15px;
}

.faq-item-header {
  cursor: pointer;
  padding-bottom: 15px;
  border-bottom: 1px solid #777590;
}

.faq-list-item {
  text-align: right;
  font-size: 1rem;

  &.active {
    .faq-item-header-question {
      color: var(--v-secondary-base);
    }

    .faq-item-header {
      border-bottom: 2px solid var(--v-secondary-base);
    }

    .faq-item-description {
      text-align: justify;
      max-height: 200px;
      transition: max-height 0.5s ease-in;
    }
  }
}

.faq-item-description {
  margin: 15px 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  max-height: 0;
  overflow: hidden;
}

.faq-item-header-question {
  color: #777590;
  word-break: keep-all;
  display: inline-block;
  width: calc(100% - 20px);
}
</style>

<template>
  <v-container>
    <div class="faq-container">
      <div class="section-title">سوالات متداول</div>
      <div class="section-description">
        درصورتی که پاسخ خود را در موارد مطرح شده پیدا نکردید، با واحد پشتیبانی به شماره
        <span
          class="highlight"
        >۰۲۱-۷۴۴۷۱۳۰۰</span>
        تماس بگیرید.
      </div>
      <v-layout row wrap>
        <v-flex md6 sm12 pa-3>
          <div class="faq-section-title">مرتبط با بیمار</div>
          <v-expansion-panels>
            <v-expansion-panel v-for="(faq,i) in patientFaqs" :key="i">
              <v-expansion-panel-header>{{faq.question}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-html="faq.answer"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-flex>
        <v-flex md6 sm12 pa-3>
          <div class="faq-section-title">مرتبط با پزشک</div>
          <v-expansion-panels>
            <v-expansion-panel v-for="(faq,i) in doctorsFaqs" :key="i">
              <v-expansion-panel-header>{{faq.question}}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-html="faq.answer"></div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'

@Component
export default class FaqPage extends Vue {
  public head() {
    return {
      title: 'سوالات متداول پزشکان و بیماران درباره رسا',
      link: [
        {
          rel: 'canonical',
          href: `${process.env.SITE_URL}${this.$route.path}`,
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'سوالات پرتکرار و متداول مرتبط با پزشک و مرتبط با بیمار، را در این بخش بخوانید. درصورتیکه پاسخ شما در موارد مطرح شده نبود، با شماره 021-74471300 تماس بگیرید',
        },
      ],
    }
  }
  get patientFaqs() {
    return this.$store.state.faq.patients
  }
  get doctorsFaqs() {
    return this.$store.state.faq.doctors
  }
}
</script>

