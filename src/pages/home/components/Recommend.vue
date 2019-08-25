<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="recommend-title">
      <span class="iconfont recommend-icon">&#xe615;</span>
      <p class="title">猜你喜欢</p>
    </div>
    <ul class="items">
      <li class="item" v-for="item of sights" :key="item.id">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      sights: [
        {
          'id': '457150',
          'name': '奥林匹克塔',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
          price: 138,
          location: '朝阳区',
          commentNum: 407,
          stars: 5
        },
        {
          'id': '2267',
          'name': '八达岭长城',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          price: 40,
          location: '延庆县',
          commentNum: 65721,
          stars: 5
        },
        {
          'id': '38170',
          'name': '故宫',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          price: 60,
          location: '东城区',
          commentNum: 457010,
          stars: 5
        }
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
