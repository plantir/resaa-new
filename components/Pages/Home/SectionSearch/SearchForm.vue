<style lang="scss" scoped>
form {
  width: 100%;
  ::v-deep {
    .v-input {
      width: 100%;
    }
    button {
      width: 100% !important;
      display: block;
    }
  }
  @include media(sm) {
    width: 370px;
    ::v-deep {
      button {
        width: 70% !important;
        display: block;
      }
    }
  }
}
</style>

<template>
  <form @submit.prevent="onSubmit" class="d-flex flex-column align-center">
    <v-text-field
      v-model="form.q"
      placeholder="نام و نام خانوادگی، تخصص، بیماری"
      name="q"
      v-validate="'required'"
      :error-messages="errors.collect('q')"
      data-vv-as="نام و نام خانوادگی، تخصص، بیماری"
      outlined
    />

    <v-btn class="resaa-btn" @click="onSubmit" large>جستجو در رسا</v-btn>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SearchForm extends Vue {
  form = {}

  onSubmit() {
    this.$emit('submit', this.form)
  }
}
</script>
