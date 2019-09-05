<template>
  <div>
    <div class="banner" @click="handleGalleryClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-img-number"><span class="iconfont">&#xe601;</span><span class="img-num">8</span></div>
      </div>
      <div class="banner-title"><div class="title-info">{{sightName}}</div></div>
    </div>
    <fade-animation>
      <common-gallery :imgs="galleryImgs" v-show="showGallery" @handleGalleryEmitClick="handleGalleryClick"></common-gallery>
    </fade-animation>
  </div>

</template>

<script>
import CommonGallery from '@/common/gallery/Gallery'
import FadeAnimation from '@/common/fadeAnimation/fadeAnimation'
export default {
  name: 'Banner',
  props: {
    sightName: '',
    bannerImg: '',
    galleryImgs: Array
  },
  data () {
    return {
      // imgs: ['http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_r_800x800_9b21ceda.jpg'],
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  methods: {
    handleGalleryClick () {
      this.showGallery = !this.showGallery
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    height 0
    padding-bottom 55%
    position relative
    .banner-img
      width 100%
    .banner-info
      position absolute
      left: .2rem;
      bottom .86rem
      .banner-img-number
        width: 1.2rem;
        height: .4rem;
        background: rgba(0,0,0,.5);
        border-radius: .2rem;
        font-size: .1rem;
        color: #fff;
        line-height: .4rem;
        text-align: center;
        .img-num
          margin-left .1rem
    .banner-title
      position: absolute;
      right: .2rem;
      bottom: .36rem;
      left: .2rem;
      min-height: .4rem;
      .title-info
        position: relative;
        z-index: 1;
        line-height: .4rem;
        color: #fff;
        font-size: .36rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.70);
    &::after
      content: " ";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      min-height: .6rem;
      background-color: transparent;
      background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,0)),to(rgba(0,0,0,.8)));
</style>
