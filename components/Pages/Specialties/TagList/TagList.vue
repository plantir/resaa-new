<style lang="scss" scoped>
.container {
  padding-right: 24px;
  @include media(sm) {
    padding-right: 12px;
  }
}
.tag-list {
  .main-title {
    color: #6c6c6c;
    font-size: 16px;
    font-weight: 600;
  }
  .tags {
    margin-top: 38px;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    @include media(sm) {
      margin-top: 44px;
    }
  }
}
</style>

<template>
  <v-container>
    <div class="tag-list" v-if="tags.length">
      <div class="main-title text-center">سایر تخصص‌ها و بیماری‌ها</div>
      <div class="tags">
        <Tag v-for="(item, index) in tags" :key="index" :tag="item" />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Tag from './Tag.vue'

@Component({
  components: {
    Tag,
  },
})
export default class TagList extends Vue {
  @Prop({
    required: true,
  })
  readonly tags!: Array<object>
}
</script>
