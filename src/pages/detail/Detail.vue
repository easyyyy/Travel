<template>
  <div>
    <Banner :sightName="sightName" :banner-img="bannerImg" :galleryImgs="galleryImgs"></Banner>
    <detail-header :sightName="sightName"></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [],
      sightName: '',
      galleryImgs: [],
      bannerImg: ''
    }
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json?id=', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        let data = res.data
        this.sightName = data.sightName
        this.list = data.categoryList
        this.bannerImg = data.bannerImg
        this.galleryImgs = data.galleryImgs
      }
    }
  },
  mounted () {
    this.getDetailData()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
