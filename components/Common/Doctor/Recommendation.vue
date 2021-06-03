<style lang="scss" scoped>
.form-section {
  padding: 20px;
  width: 450px;
  max-width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
  h3 {
    margin: 0;
  }
}
</style>
<template>
  <section class="form-section" ref="wrapper">
    <div class="header">
      <h3 class="primary--text">معرفی پزشک به رسا</h3>
      <v-icon color="primary" @click="$emit('close')">la-times</v-icon>
    </div>
    <div class="form-group">
      <label>نام پزشک</label>
      <v-text-field
        name="name"
        v-model="form.DoctorName"
        v-validate="{ required: true }"
        :error-messages="errors.collect('name')"
        data-vv-as="نام پزشک"
        single-line
        outlined
        hide-details="auto"
      ></v-text-field>
    </div>
    <div class="form-group">
      <label>شماره مطب</label>
      <v-text-field
        name="phoneNumber"
        v-model="form.phoneNumber"
        v-validate="{ number: true }"
        :error-messages="errors.collect('phoneNumber')"
        data-vv-as="شماره مطب"
        single-line
        outlined
        hide-details="auto"
      ></v-text-field>
    </div>
    <div class="form-group">
      <label>آدرس مطب</label>
      <v-textarea
        name="address"
        v-model="form.ClinicAddress"
        v-validate="{ required: true }"
        :error-messages="errors.collect('address')"
        data-vv-as="آدرس مطب"
        rows="3"
        single-line
        outlined
        no-resize
        hide-details="auto"
      ></v-textarea>
    </div>
    <div class="form-group mt-2">
      <label>توضیحات</label>
      <v-textarea
        name="description"
        v-model="form.Description"
        :error-messages="errors.collect('description')"
        data-vv-as="توضیحات"
        rows="3"
        single-line
        outlined
        no-resize
        hide-details="auto"
      ></v-textarea>
    </div>
    <v-btn color="primary" outlined block class="mt-4" @click="submit"
      >ثبت پزشک</v-btn
    >
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'

@Component
export default class RecommendationDoctorCompoent extends Vue {
  form = {}
  @Prop()
  scope!: any

  async submit() {
    let valid = await this.$validator.validate()
    if (valid) {
      let loader = this.$loader.show(this.$refs.wrapper)
      try {
        let result = await this.$service.doctors.recommendations(this.form)
        this.$emit('hide', result)
      } catch (error) {
        this.$toast
          .error()
          .showSimple('خطایی رخ داده است لطفا چند دقیقه دیگر تلاش کنید')
      }
      loader.hide()
    }
  }
}
</script>