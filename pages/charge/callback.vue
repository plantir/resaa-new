<style lang="scss" scoped></style>

<template>
  <div>
    {{ reqId }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  reqId: string | null = null

  mounted() {
    this.reqId = String(this.$route.query.chargeRequestId)
    console.log('extends -> mounted -> this.$route', this.$route)
  }
}
</script>
