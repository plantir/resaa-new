<style lang="scss" scoped>
.section-weblog {
  padding: 50px 0;
}
</style>

<template>
  <section class="section-weblog">
    <v-container>
      <div class="title text-center">آخرین‌ها در مجله تخصصی پزشکی رسا</div>
      <WeblogMobile />
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WeblogMobile from './Mobile/WeblogMobile.vue'

@Component({
  components: {
    WeblogMobile,
  },
})
export default class SectionWeblog extends Vue {}
</script>
