<style lang="scss" scoped>
.section-search {
  padding-bottom: 50px;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>

<template>
  <section class="section-search">
    <v-container class="d-flex flex-column align-center">
      <div class="title text-center">پزشک یا روان‌شناس خود را پیدا کنید.</div>

      <SearchForm class="mt-6" @submit="onSubmit" />

      <SearchResult class="mt-6" :doctors="doctors" />
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SearchForm from './SearchForm.vue'
import SearchResult from './SearchResult.vue'
import { Doctor } from '~/models/Doctor'

@Component({
  components: {
    SearchForm,
    SearchResult,
  },
})
export default class SectionSearch extends Vue {
  form = {}
  doctors: Doctor[] = []

  async onSubmit(form: any) {
    try {
      const { result } = await this.$service.doctor.getDoctors({
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
