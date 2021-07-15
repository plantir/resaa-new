<style lang="scss" scoped></style>

<template>
  <v-card class="">
    <v-card-title primary-title>
      <div class="full-width d-flex justify-space-between">
        <div class="title">مخاطبین شما</div>
      </div>
    </v-card-title>

    <div class="card-contetn mt-5">
      <EmptyFavoriteSpecialists />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import EmptyFavoriteSpecialists from './EmptyFavoriteSpecialists.vue'

@Component({
  components: {
    EmptyFavoriteSpecialists,
  },
})
export default class FavoriteSpecialists extends Vue {}
</script>
