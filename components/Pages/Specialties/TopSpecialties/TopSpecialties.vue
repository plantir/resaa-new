<style lang="scss" scoped>
.container {
  padding-top: 0;
}
.top-specialties-wrapper {
  .main-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    @include media(sm) {
      display: none;
    }
  }
  .item-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include media(sm) {
      justify-content: center;
    }
  }
  ::v-deep {
    .card-specialtie {
      width: 48%;
      margin-bottom: 15px;
      .v-card {
        box-shadow: 0 2px 8px 0 rgba(249, 164, 41, 0.3);
      }
      @include media(sm) {
        margin-bottom: 60px;
        width: 18%;
      }
    }
    @include media(xs-only) {
      .card-specialtie:nth-child(even) {
        .v-card {
          box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.3);
        }
      }
    }
    @include media(sm) {
      .card-specialtie:nth-child(n + 6) {
        .v-card {
          box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.3);
        }
      }
    }
  }
}
</style>

<template>
  <v-container>
    <div class="top-specialties-wrapper">
      <div class="main-title">دسترسی سریع به تخصص‌ها و بیماری‌ها</div>
      <div class="item-wrapper">
        <CardSpecialtie
          v-for="(item, index) in data"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import CardSpecialtie from './CardSpecialtie.vue'

@Component({
  components: {
    CardSpecialtie,
  },
})
export default class TopSpecialties extends Vue {
  @Prop({
    required: true,
  })
  readonly data!: Array<Object>
}
</script>
