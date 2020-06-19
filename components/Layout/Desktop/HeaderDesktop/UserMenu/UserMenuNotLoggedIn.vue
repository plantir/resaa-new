<style lang="scss" scoped></style>

<template>
  <div class="left-header">
    <v-btn class="resaa-btn" to="/charge">افزایش اعتبار</v-btn>
    <nuxt-link to="/patient/login" class="auth-link font-weight-medium mr-5">ورود/ثبت‌نام</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class UserMenuNotLoggedIn extends Vue {}
</script>
