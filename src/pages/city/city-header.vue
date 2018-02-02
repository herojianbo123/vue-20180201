<template>
  <div class="header">
    <div class="title">
      <div class="back iconfont" @click="handleClick">&#xe624;</div>
      城市选择
    </div>
  </div>
</template>
<script>
export default {
  name: 'city-header',
  methods: {
    handleClick () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .title
    position: relative
    height: .88rem
    line-height: .88rem
    background: #00bcd4
    text-align: center
    font-size: .36rem
    color: #fff
    .back
      position: absolute
      top: 0
      left: 0
      width: .84rem
      line-height: .88rem
      font-size: .36rem
      font-weight: bold
</style>
