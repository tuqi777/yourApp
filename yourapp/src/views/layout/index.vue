<template>
  <div class="layout">
    <Head class="head"></Head>
    <NavBar class="navBar"></NavBar>
    <div class="content">
      <breadlist class="breaList"></breadlist>
      <Content class="content"></Content>
    </div>
    <Foot class="foot"></Foot>
  </div>
</template>
<script>
import Head from './header.vue'
import NavBar from './navbar.vue'
import Breadlist from './breadlist.vue'
import Content from './content.vue'
import Foot from './foot.vue'

export default {
  components: {
    Head,
    NavBar,
    Breadlist,
    Content,
    Foot
  }
}
</script>
<style lang="scss">
  .layout{
    .head{
      width: 100%;
      height: 60px;
      background: #336699;
    }
    .navBar{
      width: 200px;
      height: calc( 100vh - 120px);
      float: left;
      background: #545c64;
    }
    .content{
      width: calc( 100vw - 200px);
      float: right;
    }
    .breaList{
      // float: left;
      text-align: left;
    }
    .content{
      height: calc( 100vh - 151px);
    }
    .foot{
      width: 100%;
      height: 60px;
      position: fixed;
      bottom: 0;
      background: #336699;
    }
  }
</style>
