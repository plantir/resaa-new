<style lang="scss" scoped></style>

<template>
  <pre>{{ $auth.user }}</pre>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  middleware: 'auth',
})
export default class profile extends Vue {}
</script>
