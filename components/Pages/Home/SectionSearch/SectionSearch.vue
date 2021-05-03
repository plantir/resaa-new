<style lang="scss" scoped>
.section-search {
  .container {
    padding: 0 24px !important;
  }
  .title {
    font-size: 20px !important;
    font-weight: bold;
    @include media(sm) {
      font-size: 24px !important;
    }
  }
  .empty {
    padding: 40px 0;
    @include media(sm) {
      padding: 80px 0 66px;
      width: 450px;
    }
    @include media(md) {
      width: 550px;
    }
    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <section class="section-search">
    <v-container class="d-flex flex-column align-center">
      <div class="title text-center">پزشک یا روان‌شناس خود را پیدا کنید.</div>

      <SearchForm class="mt-6" @submit="onSubmit" />
      <div class="empty" v-if="!doctors.length">
        <img src="/images/home/skills.png" />
      </div>
    </v-container>
    <SearchResultMobile
      v-if="$device.isMobile"
      class="mt-6"
      :doctors="doctors"
    />
    <SearchResultDesktop v-else class="mt-6" :doctors="doctors" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SearchForm from './SearchForm.vue'
import { Doctor } from '~/models/Doctor'

@Component({
  components: {
    SearchForm,
    SearchResultDesktop: () => import('./SearchResultDesktop.vue'),
    SearchResultMobile: () => import('./SearchResultMobile.vue'),
  },
})
export default class SectionSearch extends Vue {
  form = {}
  doctors: Doctor[] = []

  async onSubmit(form: any) {
    try {
      const { result } = await this.$service.doctors.query({
        fields:
          'id,specialty,subscriberNumber,firstName,lastName,imagePath,expertise',
        limit: 10,
        query: form.q,
      })
      this.doctors = result.doctors
    } catch (error) {}
  }
}
</script>
