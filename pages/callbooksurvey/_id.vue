<style lang="scss" scoped>
.v-card {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
}
.form-group {
  margin: 6px 0;
}
</style>
<template>
  <section ref="wrapper">
    <v-card>
      <h3 class="mb-4">نظر خود را راجع به صحبت خود با ما در میان بگذارید</h3>
      <div class="form-section">
        <div class="form-group">
          <label>نام:</label>
          <v-text-field
            name="name"
            data-vv-as="نام"
            v-validate="'required'"
            :error-messages="errors.collect('name')"
            placeholder="نام خود را وارد نمایید"
            v-model="form.authorDisplayName"
            outlined
            single-line
            hide-details="auto"
          ></v-text-field>
        </div>
        <div class="form-group">
          <label>خصوصیات:</label>
          <v-select
            :items="fields"
            item-text="title"
            item-value="id"
            v-model="form.fields"
            multiple
            chips
            deletable-chips
            placeholder="انتخاب کنید"
            outlined
            single-line
            hide-details="auto"
          ></v-select>
        </div>
        <div class="form-group">
          <label>نظر شما:</label>
          <v-textarea
            name="feedback"
            data-vv-as="نظر"
            v-validate="'required'"
            :error-messages="errors.collect('feedback')"
            placeholder="نظر خود را بنویسید"
            v-model="form.feedback"
            outlined
            single-line
            hide-details="auto"
          ></v-textarea>
        </div>
        <div class="form-group mb-2">
          <label>امتیاز:</label>
          <div>
            <v-rating
              hover
              color="primary"
              length="5"
              size="40"
              v-model="form.rate"
            ></v-rating>
          </div>
        </div>
        <v-btn color="primary" @click="submit">ارسال</v-btn>
      </div>
    </v-card>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'

@Component
export default class CallBookSurveyPage extends Vue {
  fields = []
  form: any = {}
  async mounted() {
    let { result } = await this.$service.callbookSurveys.fields()
    this.fields = result
  }

  async submit() {
    let valid = await this.$validator.validate()
    if (!valid) return
    let loader = this.$loader.show(this.$refs.wrapper)
    this.form.callBookId = this.$route.params.id
    try {
      await this.$service.callbookSurveys.create(this.form)
      this.$toast.success().showSimple('با موفقیت ثبت شد')
    } catch (error) {
      this.$toast.error().showSimple('خطایی رخ داده است')
    }
    loader.hide()
  }
}
</script>