<template>
    <div class="header">
      <router-link to="/">
        <div class="back"><span class="iconfont">&#xe624;</span></div>
      </router-link>
      城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    position relative
    height .86rem
    line-height .86rem
    overflow hidden
    text-align center
    color #ffffff
    background $bgColor
    font-size .32rem
    .back
      position absolute
      font-size .4rem
      float left
      margin-left .2rem
      color white
</style>
