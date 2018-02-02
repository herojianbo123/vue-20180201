<template>
  <div>
	 <div class="city-Show" v-for="item of showCity">{{item}}</div>
  </div>
</template>

<script>
  
  export default {
    name: 'cityShow',
    props: {
      showCity: Array
    }
  }
</script>

<style lang="stylus" scopde>
	.city-Show
	  border-top: 1px solid #f5f5f5
	  color: #21212
	  font-size: .28rem
	  line-height: .76rem
	  overflow: hidden
	  padding-left: .2rem
	  text-overflow: ellipsis
	  white-space: nowrap
	  width: 100%
</style>
