<template>
    <div class="container" @click="handleGalleryEmitClick">
      <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container">
          <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img class="swiper-img" :src="item" alt="">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGalleryEmitClick () {
      this.$emit('handleGalleryEmitClick')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    z-index 99
    right 0
    top 0
    bottom 0
    background #000
    left 0
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .swiper-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
