<template>
  <div ref="wrapper">
    <div class="list" ref="wrapper">
      <div class="area">
        <div class="title border-topbottom">当前位置</div>
      </div>
      <div class="content">
        <div class="button border" @click="handleClickCity(city)">{{city || '北京'}}</div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
      </div>
      <div class="content">
        <div class="button border" @click="handleClickCity(item.city)"
                    v-for="item of hotcity" :key="item.id"
        >{{item.city}}</div>
      </div>
      <div class="area" v-for="city of china" :key="city.id">
        <div class="title border-topbottom"  :key="city.id" >
          {{city[0]}}
        </div>
        <div class="cityarea border-topbottom" v-for="item of city[1]" :key="item.id"
              @click="handleClickCity(item.cityarea)"
        >{{item.cityarea}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'city-list',
  props: {
    china: Array,
    hotcity: Array
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleClickCity (city) {
      // console.log(city)
      this.changeCity(city)
      this.$nextTick(() => {
        this.$router.push('/')
      })
    }
  },
  watch: {
    china () {
      // console.log(this.china)
    }
  },
  mouthed () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
.list
  height: 12rem
  .area
    .title
      line-height: .54rem
      padding-left: .3rem
      color: #616161
      font-size: .26rem
      background: #cccccc
      &::before, &::after
        border-color: #616161
  .content
    overflow: hidden
    padding-right: .4rem
    .button
      float: left
      width: 27%
      text-align: center
      line-height: .6rem
      border-radius: .1rem
      margin: .2rem
      border: .02rem solid #999
  .cityarea
    font-size: .28rem
    line-height: .6rem
    padding-left: .2rem
    &::before
      border-color: #ccc

</style>
