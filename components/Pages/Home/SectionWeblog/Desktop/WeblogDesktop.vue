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
    <v-col cols="6" class="right">
      <div class="wrapper py-3">
        <Post
          :post="{title:'درمان کیست و تنبلی تخمدان برای بارداری و درمان کیست و تنبلی تخمدان برای بارداری'}"
          heightImage="300px"
        />
      </div>
    </v-col>
    <v-col cols="6">
      <v-row>
        <v-col cols="6">
          <Post :post="{title:'‏5 نکته مهم درباره روانشناسی کودک'}" heightImage="140px" />
        </v-col>
        <v-col cols="6">
          <Post :post="{title:'‏5 نکته مهم درباره روانشناسی کودک'}" heightImage="140px" />
        </v-col>
        <v-col cols="6">
          <Post :post="{title:'‏5 نکته مهم درباره روانشناسی کودک'}" heightImage="140px" />
        </v-col>
        <v-col cols="6">
          <Post :post="{title:'‏5 نکته مهم درباره روانشناسی کودک'}" heightImage="140px" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '../Post/Post.vue'

@Component({
  components: {
    Post,
  },
})
export default class WeblogMobile extends Vue {
  post = {}
}
</script>
