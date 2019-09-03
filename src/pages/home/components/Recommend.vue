<template>
  <div>
    <div class="recommend-title">
      <span class="iconfont recommend-icon">&#xe615;</span>
      <p class="title">猜你喜欢</p>
    </div>
    <ul class="items">
        <router-link tag="li" :to="'/detail/' + item.id" class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
        <p class="item-title">{{item.name}}</p>
        <div class="item-comment">
          <div class="stars">
            <div class="star"  v-for="(star,index) in item.stars" :key="index">
              <img class="star" src="../../../assets/star.png" alt="">
            </div>
          </div>
          <p class="comment-num">{{item.commentNum}}条评论</p>
        </div>
        <p class="item-price-location">
          <span class="price-symbol">¥{{item.price}}</span>
          <span>起</span>
          <span class="location">{{item.location}}</span>
        </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      sights: [
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-title
    display flex
    flex-direction row
    text-indent .2rem
    padding: .24rem 0 .26rem;
    .recommend-icon
      font-size .4rem
      vertical-align middle
    .title
      line-height .44rem
      height .44rem
      font-size .32rem
      margin-left .08rem
      color: #212121;
  .items
    display flex
    flex-direction column
    .item
      display flex
      flex-direction row
      margin-left .24rem
      padding-top .2rem
      padding-bottom .2rem
      height 1.9rem
      .item-img-wrapper
        float: left;
        overflow: hidden;
        width: 2rem;
        height: 2rem;
        .item-img
          width 100%
      .item-info
        /*display flex*/
        /*flex-direction column*/
        width 5rem
        padding-left: .22rem;
        overflow hidden
        .item-title
          margin-top: .26rem;
          height: .44rem;
          color: #212121;
          font-size: .32rem;
          line-height: .44rem;
        .item-comment
          .comment-num
            margin-left .2rem
            vertical-align text-bottom
          .stars
            display flex
            flex-direction row
            .star
              width .2rem
              height .2rem
              vertical-align middle
          display flex
          flex-direction row
          margin-top: .14rem;
          height: .34rem;
          color: #616161;
          font-size: .24rem;
          line-height: .34rem;
          vertical-align: middle;
        .item-price-location
          position: relative;
          margin-top: .22rem;
          color: #616161;
          font-size: .24rem;
          line-height: .4rem;
          overflow hidden
          .price-symbol
            color: #ff8300;
            font-size .4rem
          .location
            float right
            margin-right .24rem
</style>
