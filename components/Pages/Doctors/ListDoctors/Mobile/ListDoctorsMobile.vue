<style lang="scss" scoped>
.doctors-list {
  width: 100%;
  .pagination-wrapper {
    margin-top: 30px;
    width: calc(100% - 10px);
    padding-right: 15px;
    ::v-deep {
      .v-pagination__item {
        box-shadow: none;
        border: solid 0.5px #13d1f3;
        background: transparent;
        border-radius: 4px;
        color: #212121;
        &.v-pagination__item--active {
          color: #fff;
          background-image: linear-gradient(225deg, #13d1f3, #35d6c1);
        }
      }
      .v-pagination__navigation {
        background: transparent;
        box-shadow: none;
        color: #13d1f3;
        i {
          color: #13d1f3;
        }
        &.v-pagination__navigation--disabled {
          i {
            color: #b6b6b6;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="doctors-list">
    <div class="doctors d-flex flex-column align-end" v-if="loading">
      <AppSkeleton
        section="Doctor"
        v-for="(item, index) in 10"
        :key="index"
        class="mt-6"
      />
    </div>

    <div class="doctors d-flex flex-column align-end" v-if="!loading">
      <Doctor v-for="(item, index) in 10" :key="index" class="mt-6" />
    </div>

    <div class="pagination-wrapper d-flex justify-center" v-if="!loading">
      <v-pagination
        v-model="page"
        :length="100"
        :circle="false"
        :total-visible="5"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Doctor from '@/components/Common/Doctor/Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class ListDoctorsMobile extends Vue {
  page = 1
  loading = true
}
</script>
