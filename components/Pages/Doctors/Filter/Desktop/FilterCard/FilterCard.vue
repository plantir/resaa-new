<style lang="scss" scoped>
.filter-card {
  .title-wrapper {
    width: 100%;
  }
  ::v-deep {
    .v-card {
      .v-card__title {
        margin: 4px 10px 25px 10px !important;
        // border-width: 2px;
        line-height: 35px;
        .main-title {
          font-size: 17px;
          font-weight: bold;
        }
        &::before {
          display: none;
        }
      }
    }
  }

  .card-body {
    overflow-y: hidden;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
    &.full {
      max-height: 540px !important;
      overflow-y: auto;
      transition: max-height 1s ease-in-out;
    }
  }
}

.show-all {
  background-color: #f5f5f5;
  user-select: none;
  line-height: 37px;
  cursor: pointer;
  margin-top: 20px;
  .label {
    font-weight: 500;
    margin-left: 4px;
  }
  ::v-deep {
    .v-icon {
      transform: rotate(90deg);
    }
  }
  &.full {
    ::v-deep {
      .v-icon {
        transform: rotate(270deg);
      }
    }
  }
}
</style>

<template>
  <div class="filter-card">
    <v-card>
      <v-card-title>
        <div class="title-wrapper d-flex justify-space-between">
          <span class="main-title">{{ title }}</span>
          <div class="collapse" v-if="hasCollapse">
            <v-icon @click="onCollapse" v-if="collapse">expand_less</v-icon>
            <v-icon @click="onCollapse" v-else>expand_more</v-icon>
          </div>
        </div>
      </v-card-title>

      <div
        v-if="!collapse"
        class="card-body"
        ref="cardBody"
        :style="{
          maxHeight: `${maxHeight}px`,
        }"
        :class="{ full: showAll }"
      >
        <slot />
      </div>
      <div
        v-if="cardBodyHeight === maxHeight && !collapse"
        class="show-all d-flex justify-center"
        :class="{ full: showAll }"
        @click="onShowAll"
      >
        <span class="label">{{ collapseLabel }}</span>
        <v-icon small>double_arrow</v-icon>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FilterCard extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly title!: String

  @Prop({
    type: Number,
    default: 185,
  })
  readonly maxHeight!: Number

  @Prop({
    type: Boolean,
    default: true,
  })
  readonly hasCollapse!: Boolean

  collapse = false
  cardBodyHeight = 0
  showAll = false

  $refs!: {
    cardBody: HTMLFormElement
  }

  onCollapse() {
    this.collapse = !this.collapse
  }

  get collapseLabel() {
    return this.showAll ? 'بستن' : 'نمایش بیشتر'
  }

  onShowAll() {
    this.showAll = !this.showAll
  }

  mounted() {
    this.cardBodyHeight = this.$refs.cardBody?.clientHeight || 0
  }
}
</script>
