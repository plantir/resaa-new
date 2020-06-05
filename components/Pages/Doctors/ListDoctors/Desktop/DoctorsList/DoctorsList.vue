<style lang="scss" scoped>
.doctors-list {
  .pagination-wrapper {
    margin-top: 30px;
    text-align: left;
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
    <Doctor v-for="(item, index) in 10" :key="index" class="mt-6" />

    <div class="pagination-wrapper">
      <v-pagination v-model="page" :length="6" :circle="false" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Doctor from './Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class DoctorsList extends Vue {
  page = 1
}
</script>
