<template>
  <div class="main">
    <div class="head-fixed">
      <city-header></city-header>
      <search :china="china"></search>
    </div>
    <list class="list" :hotcity="hotcity" :china="china"></list>
  </div>
</template>
<script>
import CityHeader from './city-header'
import Search from './search'
import List from './city-list'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      china: [],
      hotcity: []
    }
  },
  components: {
    CityHeader,
    Search,
    List
  },
  created () {
    this.getListInfo()
  },
  methods: {
    getListInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCitySucc.bind(this))
        .catch(this.handleGetCityError.bind(this))
    },
    handleGetCitySucc (res) {
      res && (res = res.data)
      // console.log(res.data)
      if (res && res.data) {
        res.data.china && (this.china = res.data.china)
        res.data.hotcity && (this.hotcity = res.data.hotcity)
      } else {
        this.handleGetCityError()
      }
    },
    handleGetCityError () {
      console.log('请求失败')
    }
  }

}
</script>
<style lang="stylus" scoped>
  .main
    display: flex
    flex-direction: column
    position: absolute
    height: 0
    left: 0
    top: 0
    bottom: 0
    .list
      flex: 1
</style>
