<style lang="scss" scoped>
.page-intro {
  overflow: hidden;
  .v-application {
    background-color: $primary-color;
    background-image: linear-gradient(to left, #13d1f3, #35d6c1);
  }
  .container-intro {
    margin: 8px;
  }
  .page-intro-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: #fff;
    width: 100vw;
    height: calc(100vh - 16px);
    border-radius: 8px;
  }
}
</style>

<template>
  <v-app :dark="false">
    <div class="container-intro d-flex align-center justify-center">
      <nuxt />
    </div>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'

@Component
export default class IntroLayout extends Vue {}
</script>
