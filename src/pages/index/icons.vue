<template>
  <swiper class="icons index-icons" :options="swiperOption">
    <swiper-slide  v-for="(page, index) of pages" :key="index">
      <div class="icon-list">
        <div v-for="item in page" :key="item.id" class="icon">
           <img class="icons-img" :src="item.imgUrl"/>
           <p class="icon-title">{{item.title}}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'index-icons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  icons >>> .swiper-pagination-buttet
    background: #ccc
  .icons
    overflow: hidden
    width: 100%
    padding-bottom: .4rem
  .icon-list
    display: flex
    flex-direction: row
    flex-wrap: wrap
    .icon
      width: 25%
      padding-top: .3rem
      text-align: center
      .icons-img
        width: .66rem
        height: .66rem
      .icon-title
        font-size: .28rem
        padding-top: .14rem
        color: #333
</style>
<style lang="stylus">
  .swiper-wrapper
    padding-bottom: .2rem
</style>
