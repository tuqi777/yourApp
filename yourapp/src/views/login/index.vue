<template>
  <div class="login">
    <div class="contain" >
      <h1 style="line-height:100px;">{{title}}</h1>
      <el-radio>asd</el-radio>
      <Content>
        <template v-slot:header="slotProps">
          <div>
            {{slotProps.content.watch}}
          </div>
          <p>{{slotProps.content.num}}</p>
        </template>
      </Content>
    </div>
  </div>
</template>
<script>
import content from '@/components/content.vue'

export default {
  components: {
    Content: content
  },
  data () {
    return {
      title: '在你的心上自由地飞翔！'
    }
  }
}
</script>
<style lang="scss">
  .login{
    background:url("./../../assets/imgs/003.jpg")  no-repeat center center ;
    background-size: cover;
    width: 100%;
    height: calc(100vh);
    position: relative;
    .contain{
      width: 400px;
      height: 300px;
      position: absolute;
      right: 10%;
      top: 50%;
      transform: translate(0 ,-50%);
      background: #fff;
    }
  }
</style>
