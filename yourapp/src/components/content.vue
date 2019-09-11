<template>
  <div class="testCom">
    <h2>我是测试子组件!</h2>
    <slot name="header" :content="content">
    </slot>
    <el-button @click="buyMore">默认按钮</el-button>
    <p>
      <input type="text" v-focus>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      content: {
        watch: '给爸爸买个表',
        num: 1
      }
    }
  },
  computed: {

  },
  methods: {
    buyMore () {
      this.content.num++
      console.log(this.content.num)
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .testCom{
    p{
      line-height: 40px;
    }
  }
</style>
