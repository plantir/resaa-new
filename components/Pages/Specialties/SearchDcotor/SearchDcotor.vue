<style lang="scss" scoped>
.search-dcotor {
  position: relative;
  background: url('/images/specialties/img_pattern.png') center top;
  transform: rotate(180deg);
  height: 270px;
  clip-path: ellipse(170% 100% at 50% 100%);
  @include media(sm) {
    height: 370px;
    clip-path: ellipse(100% 100% at 50% 100%);
  }
  &::before {
    background: rgba(255, 255, 255, 0.9);
    position: absolute;
    right: 0;
    width: 100%;
    height: 270px;
    @include media(sm) {
      height: 370px;
    }
    content: '';
  }
  form {
    transform: rotate(180deg);
    width: 90%;
    @include media(sm) {
      width: 600px;
    }
    h1 {
      color: #000;
      font-size: 16px;
      @include media(sm) {
        font-size: 22px;
      }
    }
    ::v-deep {
      .input-q {
        width: 312px;
        margin-top: 24px;
        @include media(sm) {
          width: 387px;
        }
        .v-input__slot {
          box-shadow: none !important;
        }
      }
    }

    .btn-q {
      width: 312px;
      @include media(sm) {
        width: 240px;
      }
    }
  }
}
</style>

<template>
  <section class="search-dcotor d-flex flex-column align-center justify-center">
    <form @submit.prevent="onSubmit" class="d-flex flex-column align-center">
      <h1>نام پزشک، تخصص یا بیماری مدنظرتان را وارد کنید.</h1>
      <v-text-field
        v-model="searchWord"
        placeholder="نام و نام خانوادگی، تخصص، بیماری"
        name="q"
        v-validate="'required'"
        :error-messages="errors.collect('q')"
        data-vv-as="نام و نام خانوادگی، تخصص، بیماری"
        class="input-q"
        outlined
        solo
      >
        <template v-slot:append>
          <img
            width="30"
            height="30"
            src="/images/icons/ic_search.png"
            alt="search"
          />
        </template>
      </v-text-field>

      <v-btn class="resaa-btn btn-q" @click="onSubmit" x-large>
        جستجو در رسا
      </v-btn>
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SearchDcotor extends Vue {
  searchWord = ''
  @Prop({
    type: Function,
  })
  readonly search!: Function

  onSubmit() {
    this.$emit('submit', this.searchWord)
    this.search()
  }
}
</script>
