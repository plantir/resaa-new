<style lang="scss" scoped>
.posts {
  // padding: 50px 0;
  padding: 32px 0;
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
        <Post :post="this.post[0]" :hasDescription="true" heightImage="300px" />
      </div>
    </v-col>
    <v-col v-if="!loading" cols="6">
      <v-row>
        <v-col cols="6">
          <Post
            :post="this.post[1]"
            :hasDescription="false"
            heightImage="140px"
          />
        </v-col>
        <v-col cols="6">
          <Post
            :post="this.post[2]"
            :hasDescription="false"
            heightImage="140px"
          />
        </v-col>
        <v-col cols="6">
          <Post
            :post="this.post[3]"
            :hasDescription="false"
            heightImage="140px"
          />
        </v-col>
        <v-col cols="6">
          <Post
            :post="this.post[4]"
            :hasDescription="false"
            heightImage="140px"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
// import AppSkeleton from '@/components/Common/AppSkeleton/AppSkeleton.vue'
import Post from '../Post/Post.vue'

@Component({
  components: {
    Post,
    // AppSkeleton,
  },
})
export default class WeblogDesktop extends Vue {
  loading = false
  @Prop({
    required: true,
  })
  readonly posts!: Array<Object>
  get post() {
    return this.posts.map((post: any) => {
      return {
        title: post.title.rendered,
        link: post.link,
        description: post.excerpt.rendered,
        content: post.content.rendered,
        image: post._embedded['wp:featuredmedia']
          ? post._embedded['wp:featuredmedia']['0'].source_url
          : '',
      }
    })
  }
}
</script>
