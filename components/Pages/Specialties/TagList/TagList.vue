<style lang="scss" scoped>
.tag-list {
  .main-title {
    color: #6c6c6c;
    font-size: 16px;
    font-weight: 600;
  }
  .tags {
    margin-top: 38px;
    margin-bottom: 50px;
    @include media(sm) {
      margin-top: 44px;
    }
  }
}
</style>

<template>
  <v-container>
    <div class="tag-list">
      <div class="main-title text-center">
        سایر تخصص‌ها و بیماری‌ها
      </div>
      <div class="tags d-flex flex-wrap">
        <Tag v-for="(item, index) in tags" :key="index" :tag="item" />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Tag from './Tag.vue'

@Component({
  components: {
    Tag,
  },
})
export default class TagList extends Vue {
  tags = [
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
    {
      name: 'تست',
    },
  ]
}
</script>
