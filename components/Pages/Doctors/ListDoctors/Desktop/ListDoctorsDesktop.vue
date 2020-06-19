<style lang="scss" scoped>
.list-doctors-wrapper {
  width: calc(75% - 40px);
}
.pagination-wrapper {
  margin-top: 30px;
  text-align: left;
}
</style>

<template>
  <div class="list-doctors-wrapper">
    <SortDoctors @click="onSort" />
    <template v-if="$fetchState.pending">
      <div class="mt-3">
        <v-skeleton-loader
          :loading="true"
          v-for="item in 4"
          :key="'fetch'+item"
          class="doctors--item"
          type="image,list-item-two-line, actions"
        ></v-skeleton-loader>
      </div>
    </template>
    <DoctorsList :doctors="doctors" />
    <div class="pagination-wrapper">
      <v-pagination
        v-model="page"
        @input="pageChange"
        :length="paginationLength"
        :circle="false"
        :total-visible="6"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SortDoctors from './SortDoctors/SortDoctors.vue'
import DoctorsList from './DoctorsList/DoctorsList.vue'
import { NuxtLoaderElement } from 'vrwebdesign-nuxt/modules/nuxt-loader/types'
Component.registerHooks(['fetch'])
@Component({
  components: {
    SortDoctors,
    DoctorsList,
  },
})
export default class ListDoctorsDesktop extends Vue {
  ajaxLoading!: boolean
  limit = 10
  page = 1
  query = null
  doctors: any = []
  totalItems = 0
  loading = false
  get offset() {
    return (this.page - 1) * this.limit
  }
  get paginationLength() {
    return Math.ceil(this.totalItems / this.limit) || 10
  }
  onSort(sort: String) {
    this.$emit('sort', sort)
  }
  async fetch() {
    await this.getDoctors()
  }
  async pageChange() {
    this.getDoctors()
  }

  async getDoctors() {
    let loader: any
    if (process.browser) {
      this.$vuetify.goTo(0, {
        duration: 1000,
      })
      loader = this.$loader.show('.list-doctors-wrapper')
    }
    this.loading = true
    let { result } = await this.$service.doctors.query({
      fields:
        'id,specialty,subscriberNumber,firstName,lastName,imagePath,expertise',
      limit: this.limit,
      query: this.query,
      offset: this.offset,
    })
    this.doctors = result.doctors
    this.totalItems = result.doctorsTotalCount
    this.loading = false
    if (process.browser) {
      loader.hide()
    }
  }
}
</script>
