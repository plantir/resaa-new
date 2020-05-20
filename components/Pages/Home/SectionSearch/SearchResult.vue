<style lang="scss" scoped>
.result {
  width: 100%;
  .list {
    width: 100%;
  }
  .view-all {
    border: 1px solid $primary-color;
    color: $primary-color;
    line-height: 48px;
    border-radius: 8px;
    display: block;
    text-align: center;
    font-weight: bold;
  }
  .empty {
    @include media(sm) {
      width: 800px;
    }
    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="result d-flex flex-column align-center">
    <div class="list" v-if="doctors.length > 0">
      <Doctor
        v-for="doctor in doctors"
        :key="doctor.id"
        :doctor="doctor"
        class="mb-6"
      />

      <nuxt-link class="view-all" to="/">
        مشاهده همه
      </nuxt-link>
    </div>
    <div class="empty mt-5" v-else>
      <img src="/images/home/skills.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Doctor from './Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class SearchResult extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  readonly doctors!: Array<object>
}
</script>
