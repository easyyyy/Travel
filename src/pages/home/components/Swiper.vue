<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" v-bind:key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/06e65ace8dce3638e847b04e975489d1.jpg_750x200_a2dcb0a4.jpg'
        }, {
          id: '0002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2df3ba0f23801d7ed5607f4767a18482.jpg_750x200_b4d6aa93.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.7%
    .swiper-img
      width 100%
</style>
