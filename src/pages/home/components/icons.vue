<template>
  <div>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl" alt="">
            </div>
            <p class="keywords">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <ul class="positioning-and-list">
        <li></li>
        <li></li>
      </ul>
    </div>
    <div>
      <ul class="positioning-and-list">
        <li class="positioning">
          <span class="iconfont">&#xe611;</span>
          定位失败</li>
        <li class="list"><span class="iconfont">&#xe76c;</span>必游榜单</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '故宫'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '北京必游'
        }, {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc: '水上乐园'
        }, {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        }, {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          desc: '古北水镇'
        }, {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        }, {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
          desc: '奥林匹克塔'
        }, {
          id: '0009',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
          desc: '北京世园会'
        }, {
          id: '0010',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png',
          desc: '优惠券'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons >>> .swiper-pagination-bullet-active
    background rgba(0,175,190,.8)
  .positioning-and-list
    display flex
    flex-direction row
    .positioning
      width 50%
      height 0.98rem
      line-height: .98rem;
      font-size: .28rem;
      background  #fff;
      text-align: center;
    .list
      width 50%
      height 0.98rem
      line-height: .98rem;
      font-size: .28rem;
      text-align: center;
      background #fff
  .icons
    margin-top .1rem
    .icon
      float left
      width 25%
      height 1.5rem
      padding-top .1rem
      text-align center
      touch-action: none
      .icon-img
        display inline-block
        width 1.1rem
        height 1.1rem
        .icon-img-content
          width 1.1rem
          height 1.1rem
      .keywords
        margin-top: .1rem;
        color: #212121;
        font-size: .28rem;
        ellipse()
</style>
