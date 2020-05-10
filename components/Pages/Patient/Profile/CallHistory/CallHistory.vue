<style lang="scss" scoped></style>

<template>
  <v-card class="" outlined>
    <v-card-title primary-title>
      <div class="full-width d-flex justify-space-between">
        <div class="title">تاریخچه تماس تلفنی</div>
      </div>
    </v-card-title>

    <div class="card-contetn mt-5">
      <div class="empty d-flex flex-column align-center">
        <p class="font-weight-medium my-12">
          شما تا کنون تماسی با متخصصین رسا نداشته‌اید.
        </p>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CallHistory extends Vue {}
</script>
