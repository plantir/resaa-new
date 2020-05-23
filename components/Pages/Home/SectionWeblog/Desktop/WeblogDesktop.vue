<style lang="scss" scoped>
.posts {
  padding: 50px 0;
}
</style>

<template>
  <div class="posts">
    <Post />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '../Post/Post.vue'

@Component({
  components: {
    Post,
  },
})
export default class WeblogMobile extends Vue {}
</script>
