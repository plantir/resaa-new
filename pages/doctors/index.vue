<style lang="scss" scoped>
.doctors-main {
  margin-top: 30px;
  min-height: 400px;
}
.container {
  padding: 0 24px;
}
</style>

<template>
  <section class="doctors-main" ref="wrapper">
    <v-container>
      <div class="d-flex flex-wrap" v-if="doctors">
        <template v-if="$device.isMobileOrTablet">
          <FilterMobile
            v-model="filter"
            :categories="categories"
            :specialities="specialities"
            @input="onFilterChange"
          />
          <ListDoctorsMobile
            @sort="onSort"
            :doctors="doctors"
            :loading="loading"
            :pageCurrent="page"
            :total="paginationLength"
            :pageChange="pageChange"
          />
        </template>
        <template v-else>
          <FilterDesktop
            v-model="filter"
            @input="onFilterChange"
            :categories="categories"
            :specialities="specialities"
          />
          <ListDoctorsDesktop
            @sort="onSort"
            :doctors="doctors"
            :loading="loading"
            :pageCurrent="page"
            :total="paginationLength"
            :pageChange="pageChange"
          />
        </template>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
Component.registerHooks(['head', 'fetch'])
@Component({
  components: {
    FilterMobile: () =>
      import('@/components/Pages/Doctors/Filter/Mobile/FilterMobile.vue'),
    FilterDesktop: () =>
      import('@/components/Pages/Doctors/Filter/Desktop/FilterDesktop.vue'),
    ListDoctorsMobile: () =>
      import(
        '@/components/Pages/Doctors/ListDoctors/Mobile/ListDoctorsMobile.vue'
      ),
    ListDoctorsDesktop: () =>
      import(
        '@/components/Pages/Doctors/ListDoctors/Desktop/ListDoctorsDesktop.vue'
      ),
  },
})
export default class DoctorsPage extends Vue {
  limit: number = 10
  page: number = 1
  query = null
  doctors: any = null
  totalItems: number = 0
  timeout: any = null
  loading = false
  filter = {
    query: null,
    specialty: [],
    sickness: [],
    orderBy: 0,
  }
  categories = []
  specialities = []
  seo = {
    title: 'پزشکان و متخصصان سامانه رسا',
  }
  public head() {
    return {
      title: this.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'با جستجو در بین پزشکان سامانه رسا در تخصص های زنان و زایمان، اطفال، مغز و اعصاب، روانشناسی و ... متخصص مورد نظر خود را انتخاب کنید و به صورت تلفنی به پاسخ سوالات خود برسید.',
        },
      ],
    }
  }
  // @Watch('filter', { deep: true })
  // async updateFilters(newval: any, oldval: any) {
  //   if (JSON.stringify(newval) == JSON.stringify(oldval)) return
  //   clearTimeout(this.timeout)
  //   this.timeout = setTimeout(() => {
  //     this.getDoctors()
  //   }, 1000)
  // }
  get offset() {
    return (this.page - 1) * this.limit
  }
  get paginationLength() {
    return Math.ceil(this.totalItems / this.limit)
  }

  onSort(sort: any) {
    this.filter.orderBy = sort
    this.onFilterChange()
  }

  async fetch() {
    try {
      await this.getDoctors()
      await this.getCategories()
      await this.getSpecialities()
    } catch (error) {
      console.log(error)
    }
  }

  onFilterChange() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.getDoctors()
    }, 200)
  }

  async pageChange(page: number) {
    this.page = page
    await this.getDoctors()
    if (process.browser) {
      this.$vuetify.goTo(0, { duration: 400 })
    }
  }

  async getDoctors() {
    let loader: any
    if (process.client) {
      loader = this.$loader.show('.doctors-main')
    }
    try {
      let { result } = await this.$service.doctors.query({
        limit: this.limit,
        offset: this.offset,
        sort: this.filter.orderBy,
        filters: {
          specialty: this.filter.specialty,
          category: this.filter.sickness,
        },
        query: this.filter.query,
      })
      this.doctors = result.doctors
      this.totalItems = result.doctorsTotalCount
    } catch (error) {
      console.log('DoctorsPage -> getDoctors -> error', error)
    }
    if (process.client && loader) {
      loader.hide()
    }
  }

  async getCategories() {
    try {
      let { result } = await this.$service.categories.active()
      this.categories = result.categories
    } catch (error) {}
  }

  async getSpecialities() {
    try {
      let { result } = await this.$service.doctors.MedicalSpecialties()
      this.specialities = result.medicalSpecialties
    } catch (error) {}
  }
}
</script>
