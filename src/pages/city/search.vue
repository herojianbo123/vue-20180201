<template>
  <div>
    <div class="search">
     <input class="city-search" type="text"
            placeholder="请输入选择的城市"
            @input="handleInputChange">
    </div>
    <div class="search-list" v-show="showList" ref="list">
      <ul>
        <li class="search-item border-bottom" v-for="(item, index) of filterResult" :key="index">{{item.cityarea}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'city-search',
  props: {
    china: Array
  },
  data () {
    return {
      showList: false,
      filterResult: []
    }
  },
  computed: {
    result () {
      const result = []
      for (let i in this.china) {
        this.china[i][1].forEach((value, index) => {
          result.push({
            cityarea: value.cityarea,
            itemName: value.itemName
          })
        })
      }
      // console.log(this.china[i])
      console.log(result)
      return result
    }
  },
  watch: {
    filterResult () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  methods: {
    handleInputChange (e) {
      const value = e.target.value.toLowerCase()
      if (value) {
        this.showList = true
        this.filterResult = this.result.filter((item) => {
          if (item.itemName.indexOf(value) > -1 || item.cityarea.indexOf(value) > -1) {
            return true
          }
        })
      } else {
        this.showList = false
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.list)
  }
}
</script>
<style lang="stylus" scoped>
  .search
    height: .74rem
    background: #00bcd4
    padding: 0 .2rem
    box-sizing: border-box
    .city-search
      width: 100%
      text-align: center
      line-height: .62rem
      font-size: .24rem
      margin-bottom: 0.1rem
      border-radius: .01rem
      color: #666
  .search-list
    position: fixed
    overflow: hidden
    top: 1.62rem
    left: 0
    right: 0
    bottom: 0
    z-index: 3
    background: #ccc
    .search-item
      padding-left: .2rem
      line-height: .8rem
      background: #fff
</style>
