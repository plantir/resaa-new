<style lang="scss" scoped></style>

<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" sm="6" xs="12">
        <v-card class="pa-2">
          <v-card-title primary-title>
            <div class="full-width d-flex justify-space-between">
              <div class="title">اطلاعات شخصی</div>
              <div class="left main-color">
                ویرایش اطلاعات
              </div>
            </div>
          </v-card-title>

          <div class="card-contetn mt-5">
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" xs="12">
        <v-card class="pa-2">
          <v-card-title primary-title>
            <div class="full-width d-flex justify-space-between">
              <div class="title">متخصیصن مورد علاقه</div>
            </div>
          </v-card-title>

          <div class="card-contetn mt-5">
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" xs="12">
        <v-card class="pa-2" outlined>
          <v-card-title primary-title>
            <div class="full-width d-flex justify-space-between">
              <div class="title">تاریخچه تماس تلفنی</div>
            </div>
          </v-card-title>

          <div class="card-contetn mt-5">
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" xs="12">
        <v-card class="pa-2" outlined>
          <v-card-title primary-title>
            <div class="full-width d-flex justify-space-between">
              <div class="title">تاریخچه جواب آزمایش‌ها</div>
            </div>
          </v-card-title>

          <div class="card-contetn mt-5">
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
            <p>سلام</p>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component.registerHooks(['fetch', 'head'])

@Component({
  middleware: 'auth',
  layout: 'withoutFooter',
})
export default class profile extends Vue {
  public head() {
    return {
      title: 'پروفایل بیمار',
      bodyAttrs: {
        class: 'page-patient-profile',
      },
    }
  }
}
</script>
