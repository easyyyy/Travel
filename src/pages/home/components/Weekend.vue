<template>
    <div class="weekend">
      <div class="weekend-title">周末去哪啊</div>
      <ul class="weekend-list">
        <li class="weekend-item" v-for="item of weekendList" :key="item.id">
          <div class="img-container">
            <img class="weekend-item-img" :src="item.imgUrl" alt="">
          </div>
          <div class="weekend-item-info">
            <p class="weekend-item-title">{{item.title}}</p>
            <p class="weekend-item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      // sights: [
      //   {
      //     id: 1,
      //     name: '京城周末撒欢',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
      //     desc: '在帝都过周末，不仅仅是城中游！'
      //   },
      //   {
      //     id: 2,
      //     name: '京城溜娃必去',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
      //     desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
      //   },
      //   {
      //     id: 3,
      //     name: '帝都必打卡',
      //     imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
      //     desc: '来北京必去的景点非这些地方莫属'
      //   }
      // ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .weekend-title
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    color: #212121
  .weekend-item
    margin-bottom .1rem
    .img-container
      overflow hidden
      height 0
      padding-bottom 37.4375%
    .weekend-item-img
      width 100%
    .weekend-item-info
      padding: .14rem .2rem .2rem .2rem;
      .weekend-item-title
        line-height .48rem
        font-size .28rem
        color: #212121
      .weekend-item-desc
        font-size: .24rem;
        line-height: .42rem;
        color: #616161;
        ellipse()
</style>
