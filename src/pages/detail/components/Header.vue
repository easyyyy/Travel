<template>
    <div>
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <div class="iconfont abs-icon">&#xe624;</div>
      </router-link>
      <div class="header-fixed" v-show="!showAbs">
        <router-link tag="div" to="/">
          <div class="iconfont fixed-back">&#xe624;</div>
        </router-link>
        {{sightName}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: ''
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header-abs
    position absolute
    left .1rem
    top .1rem
    width .72rem
    height: .72rem
    border-radius .36rem
    text-align center
    line-height .72rem
    background rgba(0,0,0,0.8)
    opacity: .5;
    .abs-icon
      color white
      font-size .4rem
  .header-fixed
    position fixed
    height .86rem
    top 0
    left 0
    right 0
    line-height .86rem
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
    z-index 20
    .fixed-back
      position absolute
      float left
      left .1rem
      top .1rem
      width .72rem
      height: .72rem
      text-align center
      line-height .72rem
  /*.back*/
    /*  position absolute*/
    /*  font-size .4rem*/
    /*  float left*/
    /*  margin-left .2rem*/
    /*  color white*/
</style>
