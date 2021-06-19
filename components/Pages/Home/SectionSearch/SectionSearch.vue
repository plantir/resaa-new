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

      <SearchForm class="mt-6" :loading="loading" @submit="onSubmit" />
      <div class="empty" v-if="!hasResult">
        <v-img height="500px" src="/images/home/skills.webp" />
      </div>
    </v-container>
    <template v-if="hasResult">
      <!-- {{ searchResult }} -->
      <SearchResultMobile
        v-if="$device.isMobile"
        class="mt-6"
        :result="searchResult"
      />
      <SearchResultDesktop v-else class="mt-6" :result="searchResult" />
    </template>
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
  searchResult: any = {}
  hasResult = false
  loading = false
  async onSubmit(keyword: string) {
    this.loading = true
    this.hasResult = false
    let doctorQuery = this.$service.doctors.query({
      limit: 10,
      offset: 0,
      sort: 0,
      filters: { specialty: [], category: [] },
      query: keyword,
    })
    let specialitiesService = this.$service.categories.search({
      type: 1,
      query: keyword,
    })
    let categoriesService = this.$service.categories.search({
      type: 2,
      query: keyword,
    })
    let [{ result: result1 }, { result: result2 }, { result: result3 }] =
      await Promise.all([doctorQuery, specialitiesService, categoriesService])
    this.searchResult.doctors = result1.doctors
    this.searchResult.specialities = result2.categories
    this.searchResult.categories = result3.categories
    this.hasResult = true
    // try {
    //   const { result } = await this.$service.doctors.query({
    //     limit: 10,
    //     offset: 0,
    //     sort: 0,
    //     filters: { specialty: [], category: [] },
    //     query: keyword,
    //   })
    //   this.searchResult.doctors = result.doctors
    // } catch (error) {}
    // try {
    //   const { result } = await this.$service.categories.search({
    //     type: 1,
    //     query: keyword,
    //   })
    //   this.searchResult.specialities = result.doctors
    // } catch (error) {}
    // try {
    //   const { result } = await this.$service.categories.search({
    //     type: 2,
    //     query: keyword,
    //   })
    //   this.searchResult.categories = result.doctors
    // } catch (error) {}
    this.loading = false
  }
}
</script>
