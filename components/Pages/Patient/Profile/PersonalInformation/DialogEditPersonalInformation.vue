<style lang="scss" scoped>
.dialog-edit {
  overflow: hidden;
}
</style>

<template>
  <v-dialog v-model="dialog" max-width="350">
    <v-card class="pa-3">
      <v-card-title>
        <div class="full-width d-flex justify-space-between">
          <div class="title">ویرایش اطلاعات شخصی</div>
        </div>
      </v-card-title>
      <div class="card-content mt-6">
        <form @submit.prevent="onSubmit">
          <v-text-field
            v-model="form.fullName"
            label="نام و نام خانوادگی"
            placeholder="نام و نام خانوادگی"
            name="fullName"
            v-validate="'required'"
            :error-messages="errors.collect('fullName')"
            data-vv-as="نام و نام خانوادگی"
            outlined
          />
          <v-text-field
            v-model="form.nationalNumber"
            class="ltr-input"
            label="کد ملی"
            placeholder="کد ملی"
            name="nationalNumber"
            v-validate="'required|nationalCode'"
            :error-messages="errors.collect('nationalNumber')"
            data-vv-as="کد ملی"
            outlined
          />
          <vr-date-picker v-model="form.birthday" />
          <v-text-field
            v-model="form.city"
            label="شهر"
            placeholder="شهر"
            name="city"
            v-validate="'required'"
            :error-messages="errors.collect('city')"
            data-vv-as="شهر"
            outlined
          />
          <v-text-field
            v-model="form.mobile"
            class="ltr-input"
            label="شهر"
            placeholder="موبایل"
            name="mobile"
            v-validate="'required|mobile'"
            :error-messages="errors.collect('mobile')"
            data-vv-as="موبایل"
            outlined
          />
          <v-text-field
            v-model="form.email"
            class="ltr-input"
            label="ایمیل"
            placeholder="ایمیل"
            name="email"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            data-vv-as="ایمیل"
            outlined
          />
          <div class="buttons d-flex justify-space-between">
            <v-btn text @click="dialog = false">
              انصراف
            </v-btn>
            <v-btn @click="onSubmit">
              ثبت تغییرات
            </v-btn>
          </div>
        </form>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DialogEditPersonalInformation extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly value!: object

  form = {}

  get dialog() {
    return this.value
  }
  set dialog(val) {
    this.$emit('input', val)
  }

  onSubmit() {
    this.$validator.validate().then(valid => {
      if (valid) {
        alert('hi')
      }
    })
  }
}
</script>
