<style lang="scss" scoped>
.dialog-edit {
  overflow: hidden;
}
.wrapper {
  width: 420px;
  max-width: 100%;
  padding: 24px;
}
</style>

<template>
  <v-card class="wrapper">
    <v-card-title>
      <div class="full-width d-flex justify-space-between">
        <div class="title">ویرایش اطلاعات شخصی</div>
      </div>
    </v-card-title>
    <div class="card-content mt-6">
      <form @submit.prevent="onSubmit">
        <v-text-field
          v-model="form.firstName"
          label="نام"
          placeholder="نام"
          name="firstName"
          v-validate="'required'"
          :error-messages="errors.collect('firstName')"
          data-vv-as="نام"
          outlined
        />
        <v-text-field
          v-model="form.lastName"
          label="نام خانوادگی"
          placeholder="نام خانوادگی"
          name="lastName"
          v-validate="'required'"
          :error-messages="errors.collect('lastName')"
          data-vv-as="نام خانوادگی"
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
        <vr-date-picker v-model="form.birthday" outlined label="تاریخ تولد" />
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
          v-model="form.phoneNumber"
          class="ltr-input"
          label="موبایل"
          placeholder="موبایل"
          name="phoneNumber"
          v-validate="'required|mobile'"
          :error-messages="errors.collect('phoneNumber')"
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
          <v-btn text @click="$emit('close')"> انصراف </v-btn>
          <v-btn color="primary" @click="onSubmit"> ثبت تغییرات </v-btn>
        </div>
      </form>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class DialogEditPersonalInformation extends Vue {
  @Prop({
    type: Object,
  })
  readonly scope!: object

  form = {}

  mounted() {
    this.form = {
      ...this.scope,
    }
  }

  onSubmit() {
    this.$validator.validate().then(async (valid) => {
      if (valid) {
        try {
          const userId = this.$auth.user?.userId
          await this.$service.profile.updateProfile(userId, this.form)

          const payloadProfile = {
            ...this.$auth.user,
            ...this.form,
          }

          this.$storage.setUniversal('profile', payloadProfile)

          this.$auth.setUser(payloadProfile)

          this.$toast.success().showSimple('بروزرسانی با موفقیت انجام شد.')

          this.$emit('close')
        } catch (error) {}
      }
    })
  }
}
</script>
