<template>
  <div>
    <div class="search">
      <label>
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
      </label>
    </div>
    <div class="search-content" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li v-show="hasNoData" class="search-item border-bottom">没有找到对应城市</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {

    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    height .72rem
    background-color $bgColor
    padding 0 .1rem
    .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      padding 0 .1rem
      width 100%
      text-align center
      border-radius .06rem
      color #666
  .search-content
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    z-index 20
    background-color #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #fff
      color #666
</style>
