<style lang="scss" scoped></style>

<template>
  <div class="left-header">
    <v-btn>
      <nuxt-link to="/charge">
        افزایش اعتبار
      </nuxt-link>
    </v-btn>
    <nuxt-link to="/patient/login" class="auth-link font-weight-medium mr-5">
      ورود/ثبت‌نام
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UserMenuNotLoggedIn extends Vue {}
</script>
