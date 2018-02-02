<template>
  <div class="main">
    <index-header ></index-header>
    <banner :banners="banners"></banner>
    <icons :icons="icons"></icons>
    <scroller class="scroller" :sights="sights"></scroller>
  </div>
</template>
<script>
import IndexHeader from './header'
import Banner from './banner'
import Icons from './icons'
import Scroller from './scroller'
import {mapState, mapMutations} from 'vuex'

import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      banners: [],
      icons: [],
      sights: []
    }
  },
  components: {
    IndexHeader,
    Banner,
    Icons,
    Scroller
  },
  computed: {
    ...mapState(['city'])

  },
  watch: {
    city () {
      this.getIndexData()
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    getIndexData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
      res = res ? res.data : null
      if (res && res.ret && res.data) {
        // res.data.city && (this.changeCity(res.data.city))
        res.data.banner && (this.banners = res.data.banner)
        res.data.icons && (this.icons = res.data.icons)
        res.data.sights && (this.sights = res.data.sights)
      } else {
        this.handleDataError()
      }
    },
    handleDataError () {}
  },
  mounted () {
    this.getIndexData()
  }
}
</script>
<style lang="stylus" scoped>
  .main
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 0
    .scroller
      flex: 1
      overflow: hidden
</style>
