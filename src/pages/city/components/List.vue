<template>
  <div class="list-container" ref="wrapper">
    <div>
      <div class="hot-city-container">
        <h2>热门城市</h2>
        <ul class="hot-city">
          <li v-for="(item,id) of hotCities" :key="id">{{item.name}}</li>
        </ul>
      </div>
      <h2>字母排序</h2>
      <div class="alphabet">
        <ul class="alphabet-ul">
          <li v-for="item in getAllChars" :key="item.index" @click="handleLetterClick">{{item}}</li>
        </ul>
      </div>
      <div class="alphabet-city" v-for="(item,index) in cities[0]" :key="index" :ref="index" >
        <h2>{{index}}</h2>
        <ul>
          <li v-for="city in item" :key="city.index">{{city.name}}</li>
  <!--        <li>北京</li>-->
  <!--        <li>北京</li>-->
  <!--        <li>北京</li>-->
  <!--        <li>北京</li>-->
  <!--        <li>北京</li>-->
        </ul>
      </div>
<!--    <ul class=""></ul>-->
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    cities: Array,
    hotCities: Array
  },
  data () {
    return {
      letter: ''
    }
  },
  computed: {
    getAllChars () {
      var str = []
      for (var i = 65; i < 91; i++) {
        str.push(String.fromCharCode(i))
      }
      return str
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleLetterClick (e) {
      this.letter = e.target.innerText
    }
  }

}
</script>

<style lang="stylus" scoped>
  .list-container
    overflow hidden
    position: absolute
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
    h2
      font-size .24rem
      margin .24rem .3rem
    .hot-city-container
      /*display block*/
      .hot-city
        /*display block*/
        /*position relative*/
        /*overflow hidden*/
        /*z-index 0*/
        background-color white
        overflow hidden
        position relative
        z-index 0
    li
      display list-item
      height: .9rem;
      line-height: .9rem;
      font-size: .28rem;
      text-align: center;
      /*border-bottom: .02rem solid #ddd;*/
      /*border .02rem solid #ddd*/
      margin-bottom: -1px;
      float: left;
      position: relative;
      z-index: 10;
      color: #212121;
      width 33.3%
      /*display inline-block*/
      /*overflow hidden*/
      /*white-space nowrap*/
      /*margin-right  0*/
    .alphabet
      .alphabet-ul
        position: relative;
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
        padding: .3rem 0;
        li
          width 16.66%
          height: .9rem;
          line-height: .9rem;
          font-size: .28rem;
          text-align: center;
          float: left;
          position: relative;
          z-index: 10;
          color: #212121;
    .alphabet-city
      position relative
      overflow hidden
      li
        width 25%
</style>
