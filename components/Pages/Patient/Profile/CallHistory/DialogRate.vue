<style lang="scss" scoped>
p.desc {
  color: #707070;
}
</style>

<template>
  <v-card class="pa-4">
    <form @submit.prevent="onSubmit">
      <div class="d-flex flex-column align-center">
        <p class="desc font-weight-bold">به نحوه پاسخ‌گویی خانم دکتر مهیا ملکی امتیاز دهید.</p>

        <v-rating v-model="form.rating" class="d-flex">
          <template v-slot:item="props">
            <div class="grade d-flex flex-column align-center">
              <v-icon
                color="primary"
                @click="props.click"
              >{{props.isFilled ? 'grade' : 'star_border'}}</v-icon>
              <span class="text-si">{{ props.index + 1 | persianDigit }}</span>
            </div>
          </template>
        </v-rating>

        <p
          class="desc font-weight-bold text-center mt-10"
        >نظر خود را در مورد تماستان با خانم دکتر مهیا ملکی ثبت کنید.</p>

        <v-textarea
          class="full-width"
          v-model="form.msg"
          label="متن پیام را بنویسید"
          outlined
          full-width
          single-line
          name="msg"
          v-validate="'required'"
          :error-messages="errors.collect('msg')"
          data-vv-as="متن پیام"
        />

        <div class="buttons full-width d-flex justify-space-between">
          <v-btn text @click="$emit('close')">انصراف</v-btn>
          <v-btn @click="onSubmit">ثبت نظر</v-btn>
        </div>
      </div>
    </form>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class DialogRate extends Vue {
  @Prop({
    type: Object,
  })
  readonly scope!: object
  form = {
    rating: null,
    msg: null,
  }

  async onSubmit() {
    let valid = this.$validator.validate()
    if (!valid) {
      return
    }
    if (this.form.rating === null) {
      return this.$toast.error().showSimple('امتیاز اجباری است.')
    }
    this.$emit('hide', this.form)
  }
}
</script>
