<template>
<div ref="scroller">
  <div class="content">
    <div class="item" v-for="item in sights" :key="item.id">
      <img class="item-img" v-lazy="item.imgUrl"/>
      <div class="item-content">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <p class="item-price"><span class="price-tag">&yen;</span>
          {{item.price}}<span class="price-start">起</span>
        </p>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'index-scroller',
  props: {
    sights: Array
  },
  data () {
    return {

    }
  },
  mounted () {
    this.scroller = new BScroll(this.$refs.scroller)
  },
  watch: {
    sights () {
      this.$nextTick(() => {
        this.scroller.refresh()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item
    padding: .24rem
    display: flex
    .item-img
      width: 1.4rem
      height: 1.4rem
      margin-right: .2rem
    .item-content
      flex: 1
      .item-title
        font-size: .3rem
        margin: .04rem .01rem 0
        color: #212121
    .item-desc
      padding-top: .1rem
      margin-bottom: .1rem
      font-size: .28rem
      color: #9e9e9e
    .item-price
      font-size: .36rem
      color: #ff8366
      .price-tag
        font-size: .24rem
      .price-start
        font-size: .24ren
        color: #9e9e9e
</style>
