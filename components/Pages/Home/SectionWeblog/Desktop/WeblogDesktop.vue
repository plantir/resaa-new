<style lang="scss" scoped>
.posts {
  padding: 50px 0;
  .right {
    .wrapper {
      height: 100%;
    }
  }
}
</style>

<template>
  <v-row class="posts">
    <AppSkeleton v-if="loading" section="WeblogDesktop" />

    <v-col v-if="!loading" cols="6" class="right">
      <div class="wrapper py-3">
        <Post :post="post" heightImage="300px" />
      </div>
    </v-col>
    <v-col v-if="!loading" cols="6">
      <v-row>
        <v-col cols="6">
          <Post :post="post" :hasDescription="false" heightImage="140px" />
        </v-col>
        <v-col cols="6">
          <Post :post="post" :hasDescription="false" heightImage="140px" />
        </v-col>
        <v-col cols="6">
          <Post :post="post" :hasDescription="false" heightImage="140px" />
        </v-col>
        <v-col cols="6">
          <Post :post="post" :hasDescription="false" heightImage="140px" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import AppSkeleton from '@/components/Common/AppSkeleton/AppSkeleton.vue'
import Post from '../Post/Post.vue'

@Component({
  components: {
    Post,
    // AppSkeleton,
  },
})
export default class WeblogDesktop extends Vue {
  loading = true
  post = {}
}
</script>
