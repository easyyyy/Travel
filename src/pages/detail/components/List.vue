<template>
    <div>
      <div class="item" v-for="(item, index) of list" :key="index">
        <div class="item-title">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div class="item-children" v-for="(i, index) of item.children" :key="index">
          <h5 class="item-children-title">{{i.title}}</h5>
          <div class="price">
            ¥
            <em class="price-num">{{i.price}}</em>
            <span class="price-word">起</span>
          </div>
          <div class="arrow-bottom"><span class="iconfont">&#xe654;</span></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .item
    margin-bottom: .2rem;
    background: #fff;
    .item-title
      overflow: hidden;
      position: relative;
      z-index: 4;
      margin-bottom: -.02rem;
      padding: 0 .2rem;
      height: .88rem;
      background: #fff;
      color: #333;
      font-size: .32rem;
      line-height: .88rem;
      text-indent: .4rem;
      &::before
        border-color black
        position relative
        bottom 0
        z-index 3
        left: 0;
        width: 100%;
        height: 1px;
      .item-title-icon
        display: inline-block;
        position: absolute;
        width: .36rem;
        height: .36rem;
        top: .26rem;
        left: .2rem;
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    .border-bottom
      border-color black
      position relative
      bottom 0
      z-index 5
      left: 0;
      width: 100%;
      height: 1px;
    .item-children
      position: relative;
      z-index: 2;
      margin-bottom: -.02rem;
      padding: .24rem .2rem;
      background: #fff;
      overflow hidden
      .item-children-title
        margin-right: 1.8rem;
        color: #333;
        font-size: .3rem;
        line-height: .48rem;
        display: -webkit-box;
        -webkit-line-clamp:2;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      .price
        right: .46rem;
        margin-top: -.28rem;
        color: #ff9800;
        font-size: .24rem;
        overflow: hidden;
        position: absolute;
        top: 50%;
        height: .4rem;
        line-height: .4rem;
        .price-num
          margin-left: .04rem;
          font-size: .4rem;
          font: Tahoma,Helvetica,sans-serif;
        .price-word
          display: inline-block;
          color: #9e9e9e;
          font-size: .24rem;
          -webkit-transform: scale(.8);
          -moz-transform: scale(.8);
          -ms-transform: scale(.8);
          -o-transform: scale(.8);
          transform: scale(.8);
      .arrow-bottom
        right: .13rem;
        overflow: hidden;
        position: absolute;
        top: 50%;
        height: .4rem;
        line-height: .4rem;
        margin-top: -.22rem;
        color: #bbb;
        font-size: .24rem;
</style>
